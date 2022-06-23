import React from "react";
import shiba2 from "./shiba2.jpeg";
import shiba1 from "./shiba1.webp";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

export default function PageCard() {
  return (
    <div>
      <Card
        addClass={`w-96`}
        headerClass={`flex gap-3 p-3`}
        header={
          <>
            <img src={shiba1} className="rounded-3xl w-10 h-10" />
            <div>
              shiba_inu69
              <div className="text-xs font-medium text-gray-500">
                3rd Floor, Japan
              </div>
            </div>
          </>
        }
        footerClass={`items-center justify-between p-3`}
        footer={
          <>
            <div className="flex items-center gap-3">
              <i class="fa-regular fa-face-smile text-gray-600 text-xl"></i>
              <div className="text-gray-500">Add a comment...</div>
            </div>
            <i className="fa-regular fa-paper-plane text-xl text-gray-500"></i>
          </>
        }
      >
        <img src={shiba2} />
        <div className="p-3">
          <div className="flex gap-4 pb-1">
            <Button type="basic" className=".">
              <i className="fa-regular fa-heart text-xl" />
            </Button>
            <Button type="basic" className=".">
              <i className="fa-regular fa-comment text-xl" />
            </Button>
            <Button type="basic" className=".">
              <i className="fa-regular fa-bookmark text-xl"></i>
            </Button>
          </div>
          <div className="pb-1 text-sm">
            <strong>shiba_inu69</strong> The Shiba Inu is the smallest of the
            six original and distinct spitz breeds of dog from Japan. A small,
            agile dog that copes very well with mountainous terrain, the Shiba
            Inu was originally bred for hunting.
          </div>
          <div className="text-[0.65rem] text-gray-400">1 HOUR AGO</div>
        </div>
      </Card>
    </div>
  );
}
