import Heading from "@/components/heading";
import Pera from "@/components/para";
import React from "react";

const page = () => {
  // C6-L3-A2B
  return (
    <div className=" bg-white text-black p-5 min-h-screen flex justify-center">
      <div className="w-full md:w-[900px] flex  flex-col  py-8 gap-5 p-3 border ">
        <div>
          <Heading
            headings={
              "The Galactic Quest of Myra: Six Decisions to Save the Universe"
            }
          />

          <Pera
            paraContent={
              '"Myra was an ordinary girl with an extraordinary curiosity. Living in the small town of Starlake, she often dreamed of adventures beyond the stars. One evening, as she gazed through her telescope, something unexpected happened—a blinding light shot from the night sky and struck her backyard!"'
            }
          />

          <Pera
            paraContent={
              '"When the light faded, Myra found a small, glowing orb floating in the air. As she touched it, a holographic figure appeared. It was a robotic entity named Quorra, who spoke in a calm, mechanical voice."'
            }
          />
          <Pera
            paraContent={
              "'Myra of Earth, you have been chosen to embark on a mission to save the Galactic Core. The Core's energy is fading, threatening to collapse the entire universe. Your choices will determine the fate of countless worlds. Are you ready to begin?'"
            }
          />
          <Pera
            paraContent={
              "Myra took a deep breath and nodded. A bright beam enveloped her, and she was transported to a sleek spacecraft waiting in orbit. The adventure had begun."
            }
          />
        </div>

        <div>
          <Heading headings={"Decision 1: Choosing a Destination"} />
          <Pera
            paraContent={
              "Quorra explained that the first step was to collect energy crystals from nearby planets. They needed three crystals to restore the Galactic Core, but they could only visit one planet at a time."
            }
          />
        </div>

        <div>
          <Heading headings={"Do you..."} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Visit Zephyra, a lush planet with floating islands and unpredictable storms?"
                }
              />
            </li>
            <li>
              <Pera
                paraContent={
                  "Visit Arkanos, a desert planet known for ancient ruins and hostile creatures?"
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"If Myra chose Zephyra:"} />
          <Pera
            paraContent={
              "As the spacecraft landed on a floating island, Myra saw glowing crystals embedded in the rocks. However, the island trembled as if alive."
            }
          />
        </div>
        <div>
          <Heading headings={"Decision 2:"} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Attempt to mine the crystals quickly, ignoring the island’s strange behavior."
                }
              />
            </li>
            <li>
              <Pera
                paraContent={
                  "Explore the island further to understand the source of the tremors."
                }
              />
            </li>
          </ul>

          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold text-lg">
                {"If Myra mined the crystals:"}
              </span>
              <Pera
                paraContent={
                  "The island collapsed, and she barely escaped with one crystal."
                }
              />
            </li>
            <li>
              <span className="font-bold text-lg">
                {"If Myra explored the island:"}
              </span>
              <Pera
                paraContent={
                  "She discovered a hidden ecosystem relying on the crystals. Taking only one crystal left the ecosystem intact and earned her the trust of the planet's inhabitants, who gifted her a second crystal."
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"If Myra chose Arkanos:"} />

          <Pera
            paraContent={
              "The desert planet was harsh and blazing hot. Myra followed a map Quorra provided, which led her to ancient ruins guarded by robotic sentinels."
            }
          />

          <Heading headings={"Decision 2:"} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Try to sneak past the sentinels to reach the crystal vault."
                }
              />
            </li>
            <li>
              <Pera
                paraContent={
                  "Attempt to hack the sentinel’s system with Quorra’s help."
                }
              />
            </li>
          </ul>

          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold text-lg">
                {"If Myra sneaked past:"}
              </span>
              <Pera
                paraContent={
                  "She retrieved a crystal but activated a trap, damaging her ship."
                }
              />
            </li>
            <li>
              <span className="font-bold text-lg">
                {"If Myra hacked the system:"}
              </span>
              <Pera
                paraContent={
                  "The sentinels deactivated, and she collected two crystals safely."
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"If Myra chose Arkanos:"} />

          <Pera
            paraContent={
              "The desert planet was harsh and blazing hot. Myra followed a map Quorra provided, which led her to ancient ruins guarded by robotic sentinels."
            }
          />

          <Heading headings={"Decision 3: The Cosmic Rift"} />
          <Pera
            paraContent={
              "On her way to the next destination, Myra encountered a cosmic rift—a swirling vortex of unstable energy."
            }
          />

          <Heading headings={"Do you..."} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Attempt to fly through the rift to save time, risking damage to the ship?"
                }
              />
            </li>
            <li>
              <Pera
                paraContent={"Take a safer but longer route around the rift?"}
              />
            </li>
          </ul>

          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold text-lg">
                {"Fly through the rift:"}
              </span>
              <Pera
                paraContent={
                  "The ship sustained damage, but they reached their destination faster."
                }
              />
            </li>
            <li>
              <span className="font-bold text-lg">{"Go around the rift:"}</span>
              <Pera
                paraContent={
                  "They avoided damage but lost precious time, putting the Galactic Core in further peril."
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"Decision 4: The Final Crystal"} />

          <Pera
            paraContent={
              "Quorra identified the last crystal’s location—Titania, a moon-sized station abandoned centuries ago. The station’s automated defenses were still active."
            }
          />

          <Heading headings={"Do you..."} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Try to disable the station’s defenses using stealth?"
                }
              />
            </li>
            <li>
              <Pera
                paraContent={
                  "Search for an ally among the galactic factions to help disable the station?"
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"Decision 5: The Betrayal"} />

          <Pera
            paraContent={
              'As Myra prepared to deliver the crystals to the Galactic Core, Quorra revealed a shocking truth: "Myra, the Galactic Core was designed by an ancient species. Restoring it will save the universe but could also awaken their dangerous remnants."'
            }
          />

          <Heading headings={"Do you..."} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Continue with the mission, trusting the Core’s creators?"
                }
              />
            </li>
            <li>
              <Pera
                paraContent={
                  "Seek another solution, risking the universe’s collapse?"
                }
              />
            </li>
          </ul>

          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold text-lg">{"If Myra continued:"}</span>
              <Pera
                paraContent={
                  "She successfully restored the Core but awakened the ancient species, who began reclaiming the galaxy."
                }
              />
            </li>
            <li>
              <span className="font-bold text-lg">
                {"If Myra sought another solution:"}
              </span>
              <Pera
                paraContent={
                  "She devised a way to stabilize the Core temporarily while searching for safer long-term fixes."
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"Decision 6: The Final Choice"} />

          <Pera
            paraContent={
              'The Galactic Core began glowing, ready to release its energy. Quorra gave one final warning: "The Core’s energy can either stabilize the universe or empower Earth as a leading force in the galaxy. You must choose where its power is directed."'
            }
          />

          <Heading headings={"Do you..."} />
          <ul className="list-decimal px-5">
            <li>
              <Pera
                paraContent={
                  "Stabilize the universe, ensuring balance across all worlds?"
                }
              />
            </li>
            <li>
              <Pera
                paraContent={
                  "Empower Earth, making it the center of the galaxy’s future?"
                }
              />
            </li>
          </ul>

          <Heading headings={"Endings Based on Choices:"} />
          <ul className="list-decimal pl-5">
            <li>
              <span className="font-bold text-lg">
                {"Stabilize the Universe:"}
              </span>
              <Pera
                paraContent={
                  "Myra’s selfless decision saved countless civilizations. She returned to Earth as a hero, with the galaxy forever in her debt."
                }
              />
            </li>
            <li>
              <span className="font-bold text-lg">{"Empower Earth:"}</span>
              <Pera
                paraContent={
                  "Earth became a galactic superpower, but at the cost of instability across the universe. Myra faced the consequences of her choice as alliances formed and conflicts grew."
                }
              />
            </li>
          </ul>
        </div>

        <div>
          <Heading headings={"Moral of the Story:"} />
          <Pera
            paraContent={
              "True leadership lies in balancing personal desires with the greater good. The path to saving the universe, like any great journey, is shaped by choices, each with its own consequences."
            }
          />
        </div>

        <div>
          {/* ================= */}
          <div>
            <Pera paraContent="===============================" />
          </div>

          <div className="w-full">
            <Pera
              paraContent={
                "Update code to place the images as per the text: 3 sets of images for 3 page scrollable slides that fit the content of this story."
              }
            />

            <p className="py-2   ">
              <a
                className=" "
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085547/rb_105946_bhkucz.png"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085547/rb_105946_bhkucz.png
                2nd text when choice is zephyra
              </a>
            </p>
            <p className="py-2 ">
              <a
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085547/rb_21760_muuwbh.png"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085547/rb_21760_muuwbh.png
                2nd text when choice is arkanos
              </a>
            </p>

            <p className="py-2 ">
              <a
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085546/8631179_2590_hngkyt.jpg"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085546/8631179_2590_hngkyt.jpg
                3rd text when mined crystals
              </a>
            </p>
            <p className="py-2 ">
              <a
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085547/149961891_f6a8da6e-9699-40c0-9bf5-49fbeab31945_rg8zq6.jpg"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085547/149961891_f6a8da6e-9699-40c0-9bf5-49fbeab31945_rg8zq6.jpg
                3rd text when island is explored
              </a>
            </p>

            <Pera
              paraContent={`Text where:Myra discovered a new dimension filled with vibrant energy, enhancing her ship's capabilities.Quorra identified the last crystal’s location—Titania, a moon-sized station abandoned centuries ago. The station’s automated defenses were still active.`}
            />
            <p className="py-2 ">
              Image:
              <a
                target="_blank"
                rel="noopener"
                href=" https://res.cloudinary.com/dey9w5okl/image/upload/v1734149089/23724181_2xn3_o3hm_211006_nszdup.jpg"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734149089/23724181_2xn3_o3hm_211006_nszdup.jpg
              </a>
            </p>

            <Pera
              paraContent={`Text where:She narrowly escaped detection and retrieved the crystal but lost valuable supplies.As Myra prepared to deliver the crystals to the Galactic Core, Quorra revealed a shocking truth:"Myra, the Galactic Core was designed by an ancient species. Restoring it will save the universe but could also awaken their dangerous remnants."`}
            />
            <p className="py-2 ">
              Image:
              <a
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085554/9588245_38448_fxum7u.jpg"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085554/9588245_38448_fxum7u.jpg
              </a>
            </p>

            <Pera
              paraContent={`Text where: She successfully restored the Core but awakened the ancient species, who began reclaiming the galaxy.The Galactic Core began glowing, ready to release its energy. Quorra gave one final warning:"The Core’s energy can either stabilize the universe or empower Earth as a leading force in the galaxy. You must choose where its power is directed."`}
            />
            <p className="py-2 ">
              Image:
              <a
                target="_blank"
                rel="noopener"
                href=" https://res.cloudinary.com/dey9w5okl/image/upload/v1734085553/rb_207_qytj8w.png"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085553/rb_207_qytj8w.png
              </a>
            </p>

            <Pera
              paraContent={`Text where:Myra’s selfless decision saved countless civilizations. She returned to Earth as a hero, with the galaxy forever in her debt.`}
            />

            <p className="py-2 ">
              Image:
              <a
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085546/rb_344_ptgbbx.png
"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085546/rb_344_ptgbbx.png
              </a>
            </p>

            <Pera
              paraContent={`Text where:Quorra deactivated the sentinels, allowing Myra to collect two crystals safely.On her way to the next destination, Myra encountered a cosmic rift—a swirling vortex of unstable energy.`}
            />
            <p className="py-2 ">
              Image:
              <a
                target="_blank"
                rel="noopener"
                href="https://res.cloudinary.com/dey9w5okl/image/upload/v1734085546/rb_20356_su89za.png
"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734085546/rb_20356_su89za.png
              </a>
            </p>

            <p className="py-2 ">
              GoAround:
              <a
                target="_blank"
                rel="noopener"
                href=":https://res.cloudinary.com/dey9w5okl/image/upload/v1734149806/freepik__upload__87222_upkfkq.jpg

"
              >
                https://res.cloudinary.com/dey9w5okl/image/upload/v1734149806/freepik__upload__87222_upkfkq.jpg
              </a>
            </p>
          </div>

          <div className="mt-[50px] flex flex-col">
            <span>StealthMode:</span>
            <span>MakeAlly:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
