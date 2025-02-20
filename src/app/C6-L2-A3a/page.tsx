import Heading from "@/components/heading";
import Pera from "@/components/para";
import React from "react";

const page = () => {
  // C6-L2-A3a
  return (
    <div className=" bg-white text-black p-5 min-h-screen flex justify-center">
      <div className="w-full md:w-[900px] flex flex-col py-8 gap-5 p-3 border ">
        <div>
          <Heading
            headings={`Story: "The Lost Treasure of Maplewood Forest"`}
          />
          <Pera
            paraContent={`You’re an adventurous young explorer named Alex. One sunny afternoon, you’re walking through Maplewood Forest when you stumble upon an old, dusty map sticking out from beneath a pile of leaves. The map looks ancient, and it shows a path leading to a hidden treasure deep inside the forest!`}
          />
          <Pera
            paraContent={`Excited, you decide to follow the map and see where it leads. As you walk deeper into the forest, the trees become thicker, and the sounds of birds and animals fill the air. After a while, you come to a fork in the path. There are two ways you can go.`}
          />
        </div>

        <div>
          <Heading headings={`Decision 1: Do you go...`} />
          <ul className="list-disc p-5">
            <li>
              {" "}
              <p>
                <span className="font-bold">Left</span>,where the path is dark
                and mysterious, with vines hanging from the trees?
              </p>
            </li>
            <li>
              {" "}
              <p>
                <span className="font-bold">Right</span>,where the path is sunny
                and you can see a sparkling stream nearby?
              </p>
            </li>
          </ul>

          <p>
            If you choose to go <span className="font-bold">Left</span>: {`You
            step cautiously down the dark path. The air gets cooler, and the
            trees loom overhead like giants. After a short walk, you find a
            strange glowing rock in the middle of the path. It looks magical.
            You wonder what to do next.`}
          </p>
        </div>
        <div>
          <Heading headings={`Decision 2: Do you...`} />
          <ul className="list-disc p-5">
            <li>
              {" "}
              <p>
                <span className="font-bold">Touch </span>, the glowing rock to
                see what happens?
              </p>
            </li>
            <li>
              {" "}
              <p>
                <span className="font-bold">Walk past</span>,it, deciding it
                might be too dangerous to touch?
              </p>
            </li>
          </ul>

          <p>
            If you choose to <span className="font-bold">Touch</span> {
              `the
            glowing rock: The moment your fingers make contact, the ground
            begins to rumble! Suddenly, a secret door opens in the ground, and a
            staircase leads down into a hidden underground cave. You take a deep
            breath and descend the stairs.`
            }
          </p>
          <Pera
            paraContent={`At the bottom of the stairs, you see two large doors: one made of shining gold and the other covered in ancient symbols.
`}
          />
        </div>

        <div>
          <Heading headings={`Decision 3: Do you...`} />
          <ul className="list-disc p-5">
            <li>
              {" "}
              <p>
                <span className="font-bold">Open the gold door</span>, because
                it looks grand and exciting?
              </p>
            </li>
            <li>
              {" "}
              <p>
                <span className="font-bold">Open the door with symbols</span>{`
                ,thinking it might lead to something even more mysterious?`}
              </p>
            </li>
          </ul>

          <p>
            If you choose to go <span className="font-bold">Right</span>: {`You
            follow the sunny path until you reach a peaceful, sparkling stream.
            As you walk alongside it, you hear soft footsteps behind you.
            Turning around, you see an old woman with a kind smile. She holds
            out a small, wooden box.`}
          </p>
        </div>

        <div>
          <Heading headings={`Decision 2: Do you...`} />
          <ul className="list-disc p-5">
            <li>
              {" "}
              <p>
                <span className="font-bold">Take the box</span>,{`from the woman
                and ask her what’s inside?`}
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Politely refuse</span>
                {`the box and continue on your way, unsure if it's safe?`}
              </p>
            </li>
          </ul>

          <p>
            If you choose to <span className="font-bold">Take the box:</span>
            {`The old woman smiles and says, “This box will help you on your
            journey, but you must use it wisely.” When you open the box, you
            find a glowing key. It’s tiny but seems to shimmer with magic. She
            tells you the key will open a door to the treasure but only if you
            follow your heart.`}
          </p>
          <Pera
            paraContent={`You thank the woman and continue along the path. Soon, you see a large, mysterious door hidden among the trees. It’s covered in ivy, and it looks like it hasn’t been opened in years. You wonder if the key will fit.`}
          />
        </div>
        <div>
          <Heading headings={`Decision 3: Do you...`} />
          <ul className="list-disc p-5">
            <li>
              {" "}
              <p>
                <span className="font-bold">Try the key</span> in the door to
                see if it opens?
              </p>
            </li>
            <li>
              {" "}
              <p>
                <span className="font-bold">Turn back</span>, thinking the door
                might be locked for a reason?
              </p>
            </li>
          </ul>
          <Heading headings={`Conclusion:`} />
          <Pera
            paraContent={` No matter which path you choose, each decision leads to a new twist in the adventure, and you can always go back and try a different choice to see how the story changes!`}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
