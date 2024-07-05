import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useState } from "react";

const schame = z.object({
  noteTile: z.string().min(1, { message: "Title filed is require" }),
  noteContent: z.string(),
});
type NoteFormData = z.infer<typeof schame>;

interface Props {
  onSubmit: (data: NoteFormData) => void;
}

function Form({ onSubmit }: Props) {
  const [inputOpen, setInputOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NoteFormData>({ resolver: zodResolver(schame) });

  return (
    <div className="mx-auto mt-20 max-w-screen-sm md:max-w-screen-sm xl:max-w-screen-md 2xl:max-w-screen-xl">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="  mb-4 bg-white border shadow-md border-gray-300 focus:bg-slate-600 rounded-lg block  m-3 ">
          <input
            {...register("noteTile")}
            type="text"
            id="text"
            className="  w-full mb-1 h-10 px-4 rounded-lg text-md  focus-visible:outline-none peer bg-white border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-white focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            placeholder="Title"
            onClick={() => setInputOpen(true)}
          />

          {inputOpen && (
            <>
              <textarea
                {...register("noteContent")}
                id="message"
                rows={2}
                className="w-full px-4 text-md h-20 rounded-lg focus-visible:outline-none peer bg-white border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-white focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                placeholder="Write your thoughts here..."
              ></textarea>
              <div className=" flex justify-end ">
                <button className="px-8 py-1 mx-5 text-sm shadow-md md rounded-xl bg-yellow-500 hover:bg-yellow-600 border-2 border-white">
                  Add
                </button>
              </div>
            </>
          )}
        </div>
        {errors.noteTile && (
          <p className="text-red-500 m-3">{errors.noteTile.message}</p>
        )}
      </form>
    </div>
  );
}
export default Form;
//className="absolute top-48 right-1/4 xl:right-1/3 h-9 px-1 text-sm shadow-md md rounded-xl bg-yellow-500 hover:bg-yellow-600 border-2 border-white  "
