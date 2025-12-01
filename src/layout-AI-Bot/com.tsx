'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import robotImg from '@/layout-AI-Bot/assets/s1.png';
import binWet from '@/layout-AI-Bot/assets/s2.png';
import binDry from '@/layout-AI-Bot/assets/s3.png';
import item1 from '@/layout-AI-Bot/assets/i1.png';
import item2 from '@/layout-AI-Bot/assets/i2.png';
import item3 from '@/layout-AI-Bot/assets/i3.png';
import item4 from '@/layout-AI-Bot/assets/i4.png';
import item5 from '@/layout-AI-Bot/assets/i5.png';
import item6 from '@/layout-AI-Bot/assets/i6.png';
import item7 from '@/layout-AI-Bot/assets/i7.png';
import item8 from '@/layout-AI-Bot/assets/i8.png';
import item9 from '@/layout-AI-Bot/assets/i9.png';
import item10 from '@/layout-AI-Bot/assets/i10.png';
import item11 from '@/layout-AI-Bot/assets/i11.png';
import item12 from '@/layout-AI-Bot/assets/i12.png';
import item13 from '@/layout-AI-Bot/assets/i13.png';
import item14 from '@/layout-AI-Bot/assets/i14.png';
import item15 from '@/layout-AI-Bot/assets/i15.png';
import item16 from '@/layout-AI-Bot/assets/i16.png';
import item17 from '@/layout-AI-Bot/assets/i17.png';
import item18 from '@/layout-AI-Bot/assets/i18.png';

type WasteType = 'wet' | 'dry';

interface Item {
  id: number;
  src: StaticImageData;
  label: string;
  answer: WasteType;
}

const initialItems: Item[] = [
  { id: 1, src: item1, label: 'Container', answer: 'dry' },
  { id: 2, src: item2, label: 'Apple Core', answer: 'wet' },
  { id: 3, src: item3, label: 'Banana Peel', answer: 'wet' },
  { id: 4, src: item4, label: 'Glass Jar', answer: 'dry' },
  { id: 5, src: item5, label: 'Metal Can', answer: 'dry' },
  { id: 6, src: item6, label: 'Chocolate Wrapper', answer: 'dry' },
  { id: 7, src: item7, label: 'Fruits Seeds', answer: 'wet' },
  { id: 8, src: item8, label: 'Lemon', answer: 'wet' },
  { id: 9, src: item9, label: 'Flowers', answer: 'wet' },
  { id: 10, src: item10, label: 'Rotten Vegetable', answer: 'wet' },
  { id: 11, src: item11, label: 'Rotten Vegetable', answer: 'wet' },
  { id: 12, src: item12, label: 'Sponge', answer: 'dry' },
  { id: 13, src: item13, label: 'Plastic Spoon', answer: 'dry' },
  { id: 14, src: item14, label: 'Tea Bag', answer: 'wet' },
  { id: 15, src: item15, label: 'Egg Shell', answer: 'wet' },
  { id: 16, src: item16, label: 'Fish Bone', answer: 'wet' },
  { id: 17, src: item17, label: 'Plastic Fork', answer: 'dry' },
  { id: 18, src: item18, label: 'Tyre', answer: 'dry' },
];

export default function Com(){
  // motivational/help messages to show in the halfway popup
  const popupMessages: string[] = [
    "Wet waste is anything that can rot, like fruit peels, leftover food, or leaves.",
    "Dry waste is things that don’t rot, like paper, plastic, or metal cans.",
    "Worms love to eat wet waste, they turn it into healthy soil called compost.",
    "When we separate waste, we help the Earth stay clean and happy.",
    "A banana peel can take just a few weeks to disappear, but a plastic bottle can take hundreds of years!",
    "Old paper can be recycled to make new notebooks or tissue paper.",
    "Wet waste can help plants grow if we turn it into compost.",
    "Some dry waste, like old toys or clothes, can be donated instead of thrown away.",
    "Sorting waste is like being a superhero for the planet.",
    "Clean hands are happy hands, always wash your hands after touching garbage.",
  ];

  const [showHalfwayPopup, setShowHalfwayPopup] = useState<boolean>(false);
  const [popupText, setPopupText] = useState<string>('');
  const [halfwayShown, setHalfwayShown] = useState<boolean>(false);
  const [screen, setScreen] = useState<number>(0);
  // const [started, setStarted] = useState<boolean>(false);  Unused, but kept for context

  // Shuffle initial items so the first item is randomized each session
  const shuffle = (arr: Item[]): Item[] => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const [items, setItems] = useState<Item[]>(() => shuffle(initialItems));
  const [wetBin, setWetBin] = useState<Item[]>([]);
  const [dryBin, setDryBin] = useState<Item[]>([]);
  const [animatingItem, setAnimatingItem] = useState<Item | null>(null);
  const [animationTarget, setAnimationTarget] = useState<WasteType | null>(null);
  const [animStyle, setAnimStyle] = useState<React.CSSProperties | null>(null);
  const [listOffset, setListOffset] = useState<number>(0);

  // Screen 5 replay state
  const robotRef = useRef<HTMLDivElement | null>(null);
  const replayWetRef = useRef<HTMLDivElement | null>(null);
  const replayDryRef = useRef<HTMLDivElement | null>(null);
  const [replayQueue, setReplayQueue] = useState<Array<Item & { target: WasteType }>>([]);
  const [replayIndex, setReplayIndex] = useState<number>(0);
  const [replayAnimating, setReplayAnimating] = useState<boolean>(false);

  const itemRef = useRef<HTMLDivElement | null>(null);
  const wetRef = useRef<HTMLDivElement | null>(null);
  const dryRef = useRef<HTMLDivElement | null>(null);

console.log(animationTarget)
console.log(replayIndex)

  // Log bins for debugging whenever they change
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('wetBin updated:', wetBin);
  }, [wetBin]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('dryBin updated:', dryBin);
  }, [dryBin]);

  // When all items are sorted on Screen 3, auto-advance to Screen 4
  useEffect(() => {
    if (screen === 3 && items.length === 0) {
      const t = setTimeout(() => setScreen(4), 300);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [items, screen]);

  // Prepare replay queue when entering Screen 5
  useEffect(() => {
    if (screen === 5) {
      // Build queue according to initialItems order but include only those that were sorted
      const sortedMap = new Map<number, WasteType>();
      wetBin.forEach((i) => sortedMap.set(i.id, 'wet'));
      dryBin.forEach((i) => sortedMap.set(i.id, 'dry'));
      const queue = initialItems
        .filter((it) => sortedMap.has(it.id))
        .map((it) => ({ ...it, target: sortedMap.get(it.id) as WasteType }));
      setReplayQueue(queue);
      setReplayIndex(0);
      setReplayAnimating(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  // Start replay sequence when queue is ready
  useEffect(() => {
    if (screen !== 5) return;
    if (!replayQueue || replayQueue.length === 0) return;
    if (replayAnimating) return;
    // kick off the first item
    setReplayAnimating(true);
    setTimeout(() => runReplayItem(0), 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, replayQueue]);

  // Auto-advance from Screen 5 to Screen 6 when replay finishes
  useEffect(() => {
    if (screen !== 5) return;
    if (replayAnimating) return;
    if (replayQueue && replayQueue.length > 0 && !replayAnimating) {
      const t = setTimeout(() => setScreen(6), 400);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [screen, replayAnimating, replayQueue]);

  // core replay animator: moves itemIndex through conveyor and to bin
  const runReplayItem = (index: number): void => {
    if (index >= replayQueue.length) {
      setReplayAnimating(false);
      return;
    }
    const item = replayQueue[index];
    // create fixed anim element starting from center-left of the viewport
    const animSize = 100;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // Default start (center-left)
    let startX = Math.floor(vw * 0.15);
    let startY = Math.floor(vh / 2 - animSize / 2);
    // If robot is present, start items from the top-left area right after the robot image
    const robotRectNow = robotRef.current?.getBoundingClientRect();
    if (robotRectNow) {
      startX = Math.floor(robotRectNow.right + 8);
      startY = Math.floor(robotRectNow.top + 8);
    }

    const targetBinEl = item.target === 'wet' ? replayWetRef.current : replayDryRef.current;

    // reset any previous anim style to force fresh layout
    setAnimStyle(null);
    setAnimatingItem(item);

    // small delay to ensure DOM updated before setting initial style
    setTimeout(() => {
      const robotRect = robotRef.current?.getBoundingClientRect();
       targetBinEl?.getBoundingClientRect();
      // compute a point in front of the robot (to its right, vertically centered)
      // Use startX/startY as fallback if robotRect is missing
      const frontX = robotRect ? Math.floor(robotRect.right + 12) : startX;
      const frontY = robotRect ? Math.floor(robotRect.top + robotRect.height / 2 - animSize / 2) : startY;

      // place at start and animate to the front-of-robot point
      setAnimStyle({
        position: 'fixed',
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${animSize}px`,
        height: `${animSize}px`,
        transform: 'translate(0,0)',
        transition: 'transform 0.6s cubic-bezier(0.2,0.8,0.2,1)',
        opacity: 1,
        zIndex: 9999,
      });

      const dxToFront = frontX - startX;
      const dyToFront = frontY - startY;

      // animate to front point (slower for clearer conveyor motion)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimStyle((prev) => ({ ...prev, transform: `translate(${dxToFront}px, ${dyToFront}px)`, transition: 'transform 1200ms cubic-bezier(0.2,0.8,0.2,1)' }));
        });
      });

      const arriveDuration = 1200;
      const toBinDuration = 1800;
      setTimeout(() => {
        const isCorrect = item.target === item.answer;
        const borderColor = isCorrect ? 'rgba(0,200,0,0.95)' : 'rgba(255,0,0,0.9)';
        setAnimStyle((prev) => ({ ...prev, border: `4px solid ${borderColor}`, boxSizing: 'border-box' }));
        const latestBinRect = targetBinEl?.getBoundingClientRect();
        if (!latestBinRect) {
          setAnimatingItem(null);
          setReplayIndex((idx) => idx + 1);
          runReplayItem(index + 1);
          return;
        }
        const animCenterX = frontX + animSize / 2;
        const animCenterY = frontY + animSize / 2;
        const binCenterX = latestBinRect.left + latestBinRect.width / 2;
        const binCenterY = latestBinRect.top + latestBinRect.height / 2;
        const dx2 = binCenterX - animCenterX;
        const dy2 = binCenterY - animCenterY;
        setAnimStyle((prev) => ({ ...prev, transition: `transform ${toBinDuration}ms ease-in-out, opacity ${toBinDuration}ms`, transform: `translate(${dxToFront + dx2}px, ${dyToFront + dy2}px)`, opacity: 0 }));
        setTimeout(() => {
          setAnimatingItem(null);
          setReplayIndex((idx) => idx + 1);
          runReplayItem(index + 1);
        }, toBinDuration + 50);
      }, arriveDuration + 1000);
    }, 30);
  };

  const handleSort = (binType: WasteType): void => {
    // Prevent sorting if the list is empty or an animation is already running
    if (!items.length || animatingItem) return;

    const itemToSort = items[0]; // Always take the first item
    // Try to get DOM nodes for precise animation. If not available, fall back to simple animation.
    const sourceEl = itemRef.current;
    const targetEl = binType === 'wet' ? wetRef.current : dryRef.current;

    if (!sourceEl || !targetEl) {
      // Fallback: simple animation state and timed update
      setAnimatingItem(itemToSort);
      setAnimationTarget(binType);
      setTimeout(() => {
        if (binType === 'wet') setWetBin((prev) => [...prev, itemToSort]);
        else setDryBin((prev) => [...prev, itemToSort]);
        // Remove first; do not reshuffle so order of remaining items is preserved
        setItems((prev) => prev.slice(1));
        setAnimatingItem(null);
        setAnimationTarget(null);
        setAnimStyle(null);
      }, 400);
      return;
    }

    const startRect = sourceEl.getBoundingClientRect();
    const endRect = targetEl.getBoundingClientRect();

    const animSize = 100;
    const animStartCenterX = startRect.left + startRect.width / 2;
    const animStartCenterY = startRect.top + startRect.height / 2;
    const dx = (endRect.left + endRect.width / 2) - animStartCenterX;
    const dy = (endRect.top + endRect.height / 2) - animStartCenterY;

    setAnimatingItem(itemToSort);
    setAnimationTarget(binType);
    setListOffset(-20);
    setAnimStyle({
      position: 'fixed',
      left: `${startRect.left + (startRect.width - animSize) / 2}px`,
      top: `${startRect.top + (startRect.height - animSize) / 2}px`,
      width: `${animSize}px`,
      height: `${animSize}px`,
      transform: 'translate(0px, 0px)',
      transition: 'transform 0.4s ease-in-out, opacity 0.9s ease-in-out',
      opacity: 1,
      zIndex: 9999,
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimStyle((prev) => ({ ...prev, transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }));
      });
    });

    setTimeout(() => {
      if (binType === 'wet') setWetBin((prev) => [...prev, itemToSort]);
      else setDryBin((prev) => [...prev, itemToSort]);
      setListOffset(0);
      setTimeout(() => setItems((prev) => prev.slice(1)), 0);
      setAnimatingItem(null);
      setAnimationTarget(null);
      setAnimStyle(null);
      const totalSorted = wetBin.length + dryBin.length + 1; // +1 for the item we just added
      if (!showHalfwayPopup && !halfwayShown && totalSorted >= Math.ceil(initialItems.length / 2)) {
        const msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        setPopupText(msg);
        setShowHalfwayPopup(true);
        setHalfwayShown(true);
      }
    }, 350);
  };

  // --- Screen 0: Introduction ---
  if (screen === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        {/* Top content (image + text) */}
        <div className="flex flex-row items-center justify-center w-full max-w-6xl p-8">
          <Image src={robotImg} alt="robotImg" width={250} className="rounded-lg shadow-lg" />

          <div
            className="ml-12 bg-white px-2 py-2 flex items-center justify-center shadow-lg rounded-lg"
            style={{ minWidth: 400, maxWidth: 800 }}
          >
            <span className="text-2xl md:text-2xl text-center font-bold leading-relaxed text-gray-800">
              <span className="block mb-6">
                Mixing all garbage together makes the soil and water dirty.
              </span>
              <span className="block mb-6">
                In this activity, you will program or train A.I. (artificial
                intelligence) to separate wet and dry waste.
              </span>
              <span className="block mb-6">Let’s sort the garbage!</span>
            </span>
          </div>
        </div>

        {/* Next button on new row */}
        <div className="w-full flex justify-center mt-8">
          <button
            className="px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // --- Screen 1: Examples ---
  if (screen === 1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div className="flex flex-col items-center w-full">
          <div className="text-2xl md:text-2xl font-bold text-center mb-8 max-w-2xl">
            AI does not know whether an object is wet or dry waste, but it can process images and identify patterns.
          </div>
          <div className="flex flex-row gap-16 items-end justify-center mb-8">
            <div className="flex flex-col items-center">
              <Image src={binWet} alt="Wet Waste Example" width={200} height={160} className="" />
            </div>
            <div className="flex flex-col items-center">
              <Image src={binDry} alt="Dry Waste Example" width={200} height={160} className="" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <button
            className="px-8 py-3 text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(2)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // --- Screen 2: Instructions ---
  if (screen === 2) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div className="flex flex-col items-center w-full max-w-3xl">
          <div className="text-2xl md:text-2xl font-bold text-center mb-6">
            To program A.I, check each image and select the correct bin - “Wet” or “Dry”.
          </div>
          <div className="flex flex-row gap-8 justify-center items-center mb-8">
            <div className="flex flex-col items-center">
              <Image src={binWet} alt="Wet Bin" width={200} height={160} className="" />
            </div>
            <div className="flex flex-col items-center">
              <Image src={binDry} alt="Dry Bin" width={200} height={160} className="" />
            </div>
          </div>
          <div className="text-2xl md:text-2xl font-bold text-center mb-8">
            The training you provide will teach A.I. to recognize patterns on its own.
          </div>
          <button
            className="px-8 py-3 text-2xl bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(3)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  // --- Screen 3: Sorting Game (Main Content) ---
  if (screen === 3) {
    return (
      <div className="min-h-screen flex justify-center flex-col bg-white relative p-8 overflow-hidden">
        {/* Instruction for Screen 3 */}
        <div className="w-full flex justify-center mb-4">
          <div className="text-lg text-center text-gray-700">Click on the bin to move the item inside it.</div>
        </div>
        {/* Animated element uses computed fixed position and transform */}
        {animatingItem && animStyle && (
          <div
            style={{
              ...animStyle,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={animatingItem.src}
                alt={animatingItem.label}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="mt-2 text-sm font-medium text-center">{animatingItem.label}</div>
            </div>
          </div>
        )}

        <div className="flex justify-between w-full gap-2">
          {/* Left side: Items in single row with scroll */}
          <div
            className="flex-1 overflow-x-auto"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row-reverse',
              overflow: 'hidden',
            }}
          >
            <div
              className="flex flex-row-reverse flex-nowrap gap-4 items-center min-h-[200px] p-4"
              style={{
                transition: 'transform 0.2s ease-in-out',
                transform: `translateX(${listOffset}px)`,
              }}
            >
              {items.length > 0 && (
                <div
                  key={items[0].id}
                  ref={itemRef}
                  className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-xl transition-transform hover:scale-105 w-[160px] flex-none`}
                  style={{
                    position: 'relative',
                    zIndex: items.length,
                    visibility: animatingItem && animatingItem.id === items[0].id ? 'hidden' : 'visible',
                  }}
                >
                  <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={items[0].src}
                      alt={items[0].label}
                      width={100}
                      height={100}
                      className="rounded-lg"
                      style={{ objectFit: 'contain' } as React.CSSProperties}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-center">{items[0].label}</div>
                </div>
              )}

              {items.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center p-2 rounded-lg bg-white shadow-xl transition-transform hover:scale-105 w-[160px] flex-none`}
                  style={{
                    position: 'relative',
                    zIndex: items.length - index,
                  }}
                >
                  <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={100}
                      height={100}
                      className="rounded-lg"
                      style={{ objectFit: 'contain' } as React.CSSProperties}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-center">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Bins */}
          <div className="flex flex-col gap-8 items-center" style={{ width: '180px' }}>
            <div
              ref={wetRef}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSort('wet')}
            >
              <Image src={binDry} alt="Dry Waste Bin" width={180} height={180} className="" />
              <div className="text-sm text-gray-500">({wetBin.length} items)</div>
            </div>

            <div
              ref={dryRef}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSort('dry')}
            >
              <Image src={binWet} alt="Wet Waste Bin" width={180} height={180} className="" />
              <div className="text-sm text-gray-500">({dryBin.length} items)</div>
            </div>
          </div>
        </div>

        {/* Halfway popup modal */}
        {showHalfwayPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="relative bg-white rounded-lg shadow-2xl p-6 max-w-lg mx-4 z-10">
              {/* top-right X close button */}
              <button aria-label="close" onClick={() => setShowHalfwayPopup(false)} className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
              <div className="text-xl font-semibold mb-3">Fun Fact</div>
              <div className="mb-4 text-lg">{popupText}</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- Screen 4: Dummy + Start ---
  if (screen === 4) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-2xl md:text-2xl font-bold text-center mb-8">
          Let’s see if AI know what is ‘dry’ and ‘wet’ waste.
          <br />
          <br />
          AI will analyse random set of objects and group them based on your training.
        </div>
        <br />
        <div className="w-full flex justify-center">
          <button
            className="px-8 py-3 text-2xl bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-lg"
            onClick={() => setScreen(5)}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  // --- Screen 5: Robot image at top center ---
  if (screen === 5) {
    return (
      <div className="min-h-screen flex flex-col  overflow-hidden items-center bg-white">
        {/* Robot at left */}
        <div
          className="w-full flex justify-start pt-2 pl-8"
          style={{
            marginLeft: '360px',
            marginTop: '60px',
          }}
        >
          <div ref={robotRef} className="">
            <Image className="rounded-lg shadow-xl" src={robotImg} alt="robot" width={170} />
          </div>
        </div>
        {/* Animated item (conveyor) */}
        {animatingItem && animStyle && (
          <div
            style={{
              ...animStyle,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}
          >
            <Image src={animatingItem.src} alt={animatingItem.label} width={140} height={140} />
          </div>
        )}

        <div className="flex-1 flex items-end justify-center pb-6 w-full">
          <div className="flex gap-22 items-end">
            <div ref={replayWetRef} className="flex flex-col items-center">
              <Image src={binDry} alt="dry" width={210} height={210} />
            </div>
            <div ref={replayDryRef} className="flex flex-col items-center">
              <Image src={binWet} alt="wet" width={210} height={210} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Screen 6: Results ---
  if (screen === 6) {
    const aiWetItems = wetBin || [];
    return (
      <>
        <div className="p-2 absolute right-0 z-10">
          <button
            className="flex items-center justify-center w-12 h-12 rounded-[10%] bg-green-500 hover:bg-green-600 text-white shadow-lg cursor-pointer"
            onClick={() => {
              setScreen(7);
            }}
            aria-label="confirm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </button>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-between bg-white relative pt-12 pb-6">
          <div className="max-w-5xl text-center">
            <div className="text-xl md:text-2xl font-semibold mb-6">
              Based on your training here are some objects that AI grouped as {'wet'} waste. How did the AI do?
            </div>

            <div className="w-full mt-4">
              {(() => {
                const rows: Item[][] = [];
                for (let i = 0; i < aiWetItems.length; i += 7) {
                  rows.push(aiWetItems.slice(i, i + 7));
                }
                return rows.map((row, rowIndex) => {
                  const isLast = rowIndex === rows.length - 1;
                  if (isLast && row.length < 7) {
                    return (
                      <div key={`row-${rowIndex}`} className="w-full flex justify-center gap-6 mb-4">
                        {row.map((it) => (
                          <div key={`aiwet-${it.id}`} className="flex flex-col items-center">
                            <div style={{ width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Image src={it.src} alt={it.label} width={120} height={120} />
                            </div>
                            <div className="mt-2 text-sm text-center">{it.label}</div>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div key={`row-${rowIndex}`} className="w-full flex justify-center gap-6 mb-4">
                      {row.map((it) => (
                        <div key={`aiwet-${it.id}`} className="flex flex-col items-center">
                          <div style={{ width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image src={it.src} alt={it.label} width={120} height={120} />
                          </div>
                          <div className="mt-2 text-sm text-center">{it.label}</div>
                        </div>
                      ))}
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          {/* Bottom controls: Train more (left), Robot (center), Continue (right) */}
          <div className="w-full items-end bottom-6 left-0 px-8 flex justify-between">
            <div>
              <button
                className="cursor-pointer px-6 py-3 bg-gray-200 rounded-lg"
                onClick={() => {
                  setItems(shuffle(initialItems));
                  setWetBin([]);
                  setDryBin([]);
                  setAnimatingItem(null);
                  setAnimationTarget(null);
                  setAnimStyle(null);
                  setListOffset(0);
                  setReplayQueue([]);
                  setReplayIndex(0);
                  setReplayAnimating(false);
                  setHalfwayShown(false);
                  setScreen(3);
                }}
              >
                Train more
              </button>
            </div>

            <div>
              <Image className="rounded-lg shadow-xl" src={robotImg} alt="robot" width={140} />
            </div>

            <div
              style={{
                visibility: 'hidden',
              }}
            >
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg"
                onClick={() => {
                  setScreen(0);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // --- Screen 7: Completion ---
  if (screen === 7) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-2xl font-bold mb-6">Good job!</h2>
          <p className="text-2xl font-bold">You have successfully trained the AI Bot to find differences between wet and dry waste.</p>
        </div>
      </div>
    );
  }

  return null;
}