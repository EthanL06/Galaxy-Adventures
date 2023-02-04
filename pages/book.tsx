import React, { useEffect, useState } from "react";

import { Navbar, Footer } from "@/components/global";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
type Props = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Book = (props: Props) => {
  // Get url params
  const router = useRouter();
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

  const { data } = useSWR(
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
    console.log(data);
  }, [data]);

  const renderPackage = (packageType: string, number: number) => {
    switch (packageType) {
      case "Training": {
        switch (number) {
          case 0:
            return "Basic";
          case 1:
            return "Premium";
          case 2:
            return "Deluxe";
          default:
            return "Invalid Package Type";
        }
      }

      case "Vehicle": {
        switch (number) {
          case 0:
            return "Falcon Heavy";
          case 1:
            return "Space Launch System";
          case 2:
            return "Starship";
          default:
            return "Invalid Package Type";
        }
      }

      case "Recovery": {
        switch (number) {
          case 0:
            return "Parachute";
          case 1:
            return "Vertical Landing";
          case 2:
            return "Aerial Recovery";
          default:
            return "Invalid Package Type";
        }
      }

      default:
        return "Invalid Package Type";
    }
  };

  return (
    <>
      <Navbar showLinks={false} />
      {Object.keys(bookingData).length === 0 ? (
        <div className="flex h-[30rem] items-center justify-center">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : (
        <div className="py-8 px-24 lg:px-48">
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
            <div className="text-3xl font-bold">
              Confirm Booking and Payment
            </div>
          </div>

          <div className="grid min-h-screen w-full grid-cols-2 grid-rows-1 gap-y-12 gap-x-8 ">
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
                            {renderPackage(
                              "Training",
                              Number(bookingData.trainingPackage)
                            )}
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
                            {renderPackage(
                              "Vehicle",
                              Number(bookingData.vehiclePackage)
                            )}
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
                            {renderPackage(
                              "Recovery",
                              Number(bookingData.recoveryPackage)
                            )}
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
              <div className="sticky top-12 rounded-lg bg-dark-background p-7">
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
                <hr className="my-4 rounded-full border-gray-400" />
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
