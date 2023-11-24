import { Card } from "flowbite-react";

const CardWithList = () => {
  return (
    <Card>
      <div className="title text-2xl  ml-3">Free</div>
      <div className="dollar mb-2">
        <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white  ml-3">
          $0
        </h5>
      </div>

      <div className="checkList ml-3">
        <hr />
        <ul className="list">
          <li className="list-item  my-2">
            <i class="fa-solid fa-circle-check"></i>
            <span className="text text1 ">Create 20 words maximum</span>
          </li>
          <li className="list-item my-2">
            <i class="fa-solid fa-circle-check"></i>
            <span className="text text2">AI word-generated</span>
          </li>
          <li className="list-item my-2">
            <i class="fa-solid fa-circle-check"></i>
            <span className="text text3">Vocala assistant</span>
          </li>
        </ul>
      </div>
      <div className="transition-all hover:scale-105 text-center">
        <a
          href="/"
          className="rounded-full bg-green-400 py-3 px-6 text-base font-semibold text-white"
        >
          Let's started
        </a>
      </div>
    </Card>
  );
};
export default CardWithList;
