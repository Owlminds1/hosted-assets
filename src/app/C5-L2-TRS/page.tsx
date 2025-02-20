import Heading from "@/components/heading";
import Pera from "@/components/para";
import React from "react";
const Page = () => {
  return (
    // C5-L2-TRS
    <div className=" bg-white text-black p-5 min-h-screen flex justify-center">
    <div className="w-full md:w-[900px] flex  flex-col  py-8 gap-5 p-3 border ">
      <div>
    

        <Pera
          paraContent={
            `Ethan loved playing football, he could play it all day long! But he did not care for his things! After each game, his football shoes would be left around the house, sometimes in the yard or under the bed. That’s why he would often get late for practice.`
          }
        />

        <Pera
          paraContent={
            `One day, before a very important game, Ethan couldn’t find his shoes. He rushed to the park wearing his dad’s old shoes, but they were too big and uncomfortable. His team lost the match!  Ethan was upset!`
          }
        />
      </div>

      <div>
        <Heading headings={`Why was Ethan not able to find his shoes?`} />
        <Pera
          paraContent={
            `Coach Max asked why he wasn’t playing well. He heard Ethan talk about dad’s shoes. Max said, “Maybe if you took care of your shoes, they’d be ready when you need them! You have to become responsible, buddy!`
          }
        />  
        <Pera
          paraContent={
            `Ethan asked, “What do you mean become responsible? What do I need to do?”`
          }
        />
       
      </div>

      <div>
        <Heading headings={`What does being responsible mean?`} />
        <Pera
          paraContent={
            `The next day, Ethan started putting his shoes in the right place and kept his room tidy. He also helped with chores and took care of his homework. He was never late for practice. Soon, his soccer game improved. They won the match against the very team that had knocked them out last time!`
          }
        />
      </div>

      <div>
        <Heading headings={`Why did Ethan’s game improve after he started taking care of his things?`} />
        <Pera
          paraContent={
            `Max smiled, “You’ve learned to become responsible, Ethan. Small actions lead to big rewards!”`
          }
        />
      </div>
      <div>
        <Heading headings={`What would have happened if Ethan kept leaving his shoes all over the place?`} />
       

    </div>
    </div>
  </div>
  )
}

export default Page
