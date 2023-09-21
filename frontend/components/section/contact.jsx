"use client";
import { Blob, Button } from "../ui";
import { MdShield } from "react-icons/md";
// import { sendMail } from "@/utils/mail.js";
import { html } from "@/utils/mailTemplate.js";
const ContactSection = () => {
  const sendMailHandler = async () => {
    try {
      options = {
        sender: "from@example.com",
        receiver: "to@example.com",
        subject: "Thankyou for connecting with us.",
        html: html({ name: "Dikshit", subject: "Project colaboration" }),
      };

      // const info = await sendMail(options);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="px-4 relative md:px-16 lg:px-28 mx-0 mt-36 ">
      <Blob
        classess={
          "bg-red-200 opacity-70 top-0 left-96  animate-blob-bounce blur-2xl "
        }
      />
      <Blob
        classess={
          "bg-yellow-200 opacity-70 top-24 left-56 animate-blob-bounce blur-2xl "
        }
      />

      <Blob
        classess={
          "bg-blue-200 opacity-70 top-0 left-20 animate-blob-bounce blur-2xl "
        }
      />
      <h1 className="text-2xl md:text-3xl font-semibold uppercase">Contact</h1>
      <p className="text-sm md:text-base text-gray-600 mt-6">
        "Let’s create progress together"
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
        <div>
          <form action="" className="">
            <div className="flex flex-col gap-4">
              <div className="form-control w-full p-4 text-base text-gray-600 bg-white border rounded-md">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="form-control w-full p-4 text-base text-gray-600 bg-white border rounded-md">
                <input
                  className="outline-none"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
              <div className="form-control w-full p-4 text-base text-gray-600 bg-white border rounded-md">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="form-control w-full p-4 text-base text-gray-600 bg-white border rounded-md">
                <textarea
                  className="outline-none"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>
            <Button
              onClick={sendMailHandler}
              text={"Send mail"}
              type={"special"}
              classess={
                "text-sm inline mt-4 lg:text-base px-8 py-4 text-black font-bold border-solid border-2 border-black rounded-xl "
              }
              divClass={"bg-black"}
            />
          </form>
        </div>
        <div className="right-section relative ">
          <Blob
            classess={
              "bg-red-200 opacity-70 top-0 left-96  animate-blob-bounce blur-2xl "
            }
          />
          <Blob
            classess={
              "bg-yellow-200 opacity-70 top-24 left-56 animate-blob-bounce blur-2xl "
            }
          />

          <Blob
            classess={
              "bg-blue-200 opacity-70 top-0 left-20 animate-blob-bounce blur-2xl "
            }
          />
          <div className="bg-white border rounded-md p-8 flex flex-col gap-8  w-full xl:w-1/2">
            <div>
              <MdShield className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
              <h1 className="text-sm md:text-base">
                Your data remains confidential and will not be passed to third
                parties
              </h1>
            </div>

            <div>
              <h1 className="text-sm md:text-base ">Email </h1>
              <h1 className="text-sm md:text-base font-bold">
                dikshit.b.122@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
