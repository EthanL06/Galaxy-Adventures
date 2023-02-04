import React, { useEffect, useState } from "react";

import { Navbar, Footer, Button } from "@/components/global";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import { Destination } from "@/types/destination";

type Props = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Book = (props: Props) => {
  // Get url params
  const router = useRouter();
  const [costValue, setCostValue] = useState(0);
  const [bookingData, setBookingData] = useState(
    {} as {
      destination: string;
      departureDate: string;
      returnDate: string;
      cost: string;
      tickets: string;
      trainingPackage: string;
      vehiclePackage: string;
      recoveryPackage: string;
    }
  );

  const { data }: { data: Destination } = useSWR(
    bookingData.destination
      ? `/api/destinations?destination=${bookingData.destination}`
      : null,
    fetcher
  );

  useEffect(() => {
    // If any of the values are undefined or null, return to home page
    if (
      sessionStorage.getItem("destination") === null ||
      sessionStorage.getItem("departureDate") === null ||
      sessionStorage.getItem("returnDate") === null ||
      sessionStorage.getItem("cost") === null ||
      sessionStorage.getItem("tickets") === null ||
      sessionStorage.getItem("trainingPackage") === null ||
      sessionStorage.getItem("vehiclePackage") === null ||
      sessionStorage.getItem("recoveryPackage") === null
    ) {
      router.push("/");
      return;
    }

    setBookingData({
      destination: sessionStorage.getItem("destination") || "",
      departureDate: sessionStorage.getItem("departureDate") || "",
      returnDate: sessionStorage.getItem("returnDate") || "",
      cost: sessionStorage.getItem("cost") || "",
      tickets: sessionStorage.getItem("tickets") || "",
      trainingPackage: sessionStorage.getItem("trainingPackage") || "",
      vehiclePackage: sessionStorage.getItem("vehiclePackage") || "",
      recoveryPackage: sessionStorage.getItem("recoveryPackage") || "",
    });
  }, []);

  useEffect(() => {
    setCostValue(data?.costValue);
  }, [data]);

  const renderPackage = (packageType: string, number: number) => {
    switch (packageType) {
      case "Training": {
        switch (number) {
          case 0:
            return ["Basic", 50000];
          case 1:
            return ["Premium", 100000];
          case 2:
            return ["Deluxe", 150000];

          default:
            return "Invalid Package Type";
        }
      }

      case "Vehicle": {
        switch (number) {
          case 0:
            return ["Falcon Heavy", 1000000];

          case 1:
            return ["Space Launch System", 5000000];

          case 2:
            return ["Starship", 10000000];

          default:
            return "Invalid Package Type";
        }
      }

      case "Recovery": {
        switch (number) {
          case 0:
            return ["Parachute", 30000];
          case 1:
            return ["Vertical Landing", 100000];
          case 2:
            return ["Aerial Recovery", 200000];
          default:
            return "Invalid Package Type";
        }
      }

      default:
        return "Invalid Package Type";
    }
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <>
      <Navbar showLinks={false} />
      {Object.keys(bookingData).length === 0 ? (
        <div className="flex h-[30rem] items-center justify-center">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : (
        <div className="py-8 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
          <div className="mb-4 flex items-center gap-x-3">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-x-2 text-lg font-semibold text-gray-400 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div className="text-2xl font-bold sm:text-3xl">
              Confirm Booking and Payment
            </div>
          </div>

          <div className="relative mt-8 flex grid-cols-2 flex-col gap-8 md:grid">
            <div className="row-span-1 flex flex-col gap-y-6">
              <div>
                <div className="rounded-lg bg-dark-background p-7">
                  <div className="text-3xl font-bold">Trip Overview</div>
                  <hr className="my-4 rounded-full border-gray-400" />

                  <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-3">
                      <div className="text-2xl font-semibold">General</div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">DEPARTURE</div>
                          <div className="text-gray-300">
                            {bookingData.departureDate}
                          </div>
                        </div>
                        <div>
                          <Link
                            className="font-semibold text-dark-accent transition-colors hover:text-light-accent hover:underline"
                            href={`/destinations/${bookingData.destination}`}
                          >
                            Change
                          </Link>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold">RETURN</div>
                        <div className="text-gray-300">
                          {bookingData.returnDate}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">TICKETS</div>
                          <div className="text-gray-300">
                            {bookingData.tickets}{" "}
                            {Number(bookingData.tickets) > 1
                              ? "tickets"
                              : "ticket"}
                          </div>
                        </div>
                        <div>
                          <Link
                            className="font-semibold text-dark-accent transition-colors hover:text-light-accent hover:underline"
                            href={`/destinations/${bookingData.destination}`}
                          >
                            Change
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-3">
                      <div className="text-2xl font-semibold">Packages</div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">TRAINING</div>
                          <div className="text-gray-300">
                            {
                              renderPackage(
                                "Training",
                                Number(bookingData.trainingPackage)
                              )[0]
                            }
                          </div>
                        </div>
                        <div>
                          <Link
                            className="font-semibold text-dark-accent transition-colors hover:text-light-accent hover:underline"
                            href={`/destinations/${bookingData.destination}`}
                          >
                            Change
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">VEHICLE</div>
                          <div className="text-gray-300">
                            {
                              renderPackage(
                                "Vehicle",
                                Number(bookingData.vehiclePackage)
                              )[0]
                            }
                          </div>
                        </div>
                        <div>
                          <Link
                            className="font-semibold text-dark-accent transition-colors hover:text-light-accent hover:underline"
                            href={`/destinations/${bookingData.destination}`}
                          >
                            Change
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">RECOVERY</div>
                          <div className="text-gray-300">
                            {
                              renderPackage(
                                "Recovery",
                                Number(bookingData.recoveryPackage)
                              )[0]
                            }
                          </div>
                        </div>
                        <div>
                          <Link
                            className="font-semibold text-dark-accent transition-colors hover:text-light-accent hover:underline"
                            href={`/destinations/${bookingData.destination}`}
                          >
                            Change
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative row-span-1">
              <div className="sticky top-12 flex flex-col gap-y-6 rounded-lg bg-dark-background p-7">
                <div className="flex gap-x-3">
                  <img
                    src={data?.image}
                    alt=""
                    className="h-16 w-16 rounded-lg bg-dark-background object-cover"
                  />
                  <div className="flex flex-col justify-around text-xl font-semibold">
                    <div className="text-sm font-semibold text-gray-300">
                      DESTINATION
                    </div>
                    <div className="text-3xl">{bookingData.destination}</div>
                  </div>
                </div>

                <hr className="rounded-full border-gray-400" />

                <div className="flex flex-col gap-y-3">
                  <div className="mb-2 text-2xl font-semibold">
                    Payment Details
                  </div>

                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-gray-300">
                    <div>
                      {bookingData.cost} x {bookingData.tickets}{" "}
                      {Number(bookingData.tickets) > 1 ? "tickets" : "ticket"}
                    </div>
                    <div>
                      {data &&
                        costValue &&
                        formatter.format(
                          costValue * Number(bookingData.tickets)
                        )}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-gray-300">
                    <div>
                      {
                        renderPackage(
                          "Training",
                          Number(bookingData.trainingPackage)
                        )[0]
                      }{" "}
                      Training Package
                    </div>
                    <div>
                      {formatter.format(
                        Number(
                          renderPackage(
                            "Training",
                            Number(bookingData.trainingPackage)
                          )[1]
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-gray-300">
                    <div>
                      {
                        renderPackage(
                          "Vehicle",
                          Number(bookingData.vehiclePackage)
                        )[0]
                      }{" "}
                      Vehicle Package
                    </div>
                    <div>
                      {formatter.format(
                        Number(
                          renderPackage(
                            "Vehicle",
                            Number(bookingData.vehiclePackage)
                          )[1]
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <div>
                      {
                        renderPackage(
                          "Recovery",
                          Number(bookingData.recoveryPackage)
                        )[0]
                      }{" "}
                      Recovery Package
                    </div>
                    <div>
                      {formatter.format(
                        Number(
                          renderPackage(
                            "Recovery",
                            Number(bookingData.recoveryPackage)
                          )[1]
                        )
                      )}
                    </div>
                  </div>
                </div>

                <hr className="rounded-full border-gray-400" />

                <div className="flex justify-between font-bold text-white">
                  <div>Total</div>
                  <div>
                    {formatter.format(
                      Number(
                        costValue * Number(bookingData.tickets) +
                          Number(
                            renderPackage(
                              "Training",
                              Number(bookingData.trainingPackage)
                            )[1]
                          ) +
                          Number(
                            renderPackage(
                              "Vehicle",
                              Number(bookingData.vehiclePackage)
                            )[1]
                          ) +
                          Number(
                            renderPackage(
                              "Recovery",
                              Number(bookingData.recoveryPackage)
                            )[1]
                          )
                      )
                    )}
                  </div>
                </div>

                <Button className="w-full" text="Book Now" />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Book;
