import { useTodayDate } from "@/hooks/useTodayDate";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "../global";

export default function DateModal({
  setDate,
  children,
}: {
  setDate: (date: string) => void;
  children: React.ReactNode;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { todayDate } = useTodayDate();

  return (
    <>
      <div onClick={openModal}>{children}</div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark-background p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-white"
                  >
                    Set departure date
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Choose a date for when you depart from Earth.
                    </p>
                  </div>

                  <div className="my-4">
                    <input
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      type="date"
                      className="w-full rounded-lg border-2 border-white bg-dark-background p-1 text-white focus:outline-none"
                      min={todayDate}
                    />
                  </div>

                  <div className="w-24" onClick={closeModal}>
                    <Button text="Set date" className="mt-4" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
