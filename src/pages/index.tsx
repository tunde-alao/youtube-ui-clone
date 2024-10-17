import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 ">
      <img src="./logo.png" className="h-8 w-auto" alt="YouTube Logo" />
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

function Tabs() {
  return (
    <div className="flex px-4 py-2 gap-x-2 overflow-x-hidden">
      <div className="flex flex-nowrap gap-x-2 whitespace-nowrap">
        <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded">
          All
        </div>
        <div className="bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
          Brazilian Jiu-Jitsu
        </div>
        <div className="bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
          Podcast
        </div>
        <div className="bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
          News
        </div>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="flex flex-col gap-x-0">
      <video
        src="./video.mp4"
        className="w-full h-full mt-4"
        controls
        playsInline
      />
      <div className="mt-2">
        <div className="flex gap-2">
          <img
            src="./nfl-logo.png"
            className="h-12 w-12 rounded-full"
            alt="Profile"
          />
          <div>
            <div className="font-semibold">Detroit Lions vs Dallas Cowboys</div>
            <div className="text-sm text-gray-500">
              NFL &#x2022; 1.3M views &#x2022; 14 hours ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shorts() {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <div className="flex items-center gap-2">
        <div className="w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "100%",
              height: "100%",
            }}
          >
            <g>
              <path
                d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                fill="red"
              />
              <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff" />
            </g>
          </svg>
        </div>

        <h2 className="text-2xl font-semibold">Shorts</h2>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="flex flex-col items-start relative rounded-md">
          <img
            src="./hormozi.png"
            className="h-full w-full rounded-md object-cover"
            alt="Short 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md" />
          <div className="absolute bottom-0 p-2 text-lg font-bold text-white">
            <b>A Billionaire said This...</b>
          </div>
        </div>
        <div className="flex flex-col items-start relative rounded-md">
          <img
            src="./mane.png"
            className="h-full w-full rounded-md object-cover"
            alt="Short 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md" />
          <div className="absolute bottom-0 p-2 text-lg font-bold text-white">
            <b>
              The real reason why Mane went to Saudi Arabia? &#x1F480;&#x1F62E;
            </b>
          </div>
        </div>
        <div className="flex flex-col items-start relative rounded-md">
          <img
            src="./starship.png"
            className="h-full w-full rounded-md object-cover"
            alt="Short 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md" />
          <div className="absolute bottom-0 p-2 text-lg font-bold text-white">
            <b>Elon Musk's Starship booster captured in world first.</b>
          </div>
        </div>
        <div className="flex flex-col items-start relative rounded-md">
          <img
            src="./aws.png"
            className="h-full w-full rounded-md object-cover"
            alt="Short 4"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md" />
          <div className="absolute bottom-0 p-2 text-lg font-bold text-white">
            <b>AWS Is So Good</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomTabs() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t mx-auto max-w-xl">
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <g>
              <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
            </g>
          </svg>
          <div className="text-xs text-gray-600">Home</div>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
          </svg>
          <div className="text-xs text-gray-600">Shorts</div>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
          </svg>
          <div className="text-xs text-gray-600">Subscriptions</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="h-6 w-6 rounded-full bg-blue-500 text-white text-center"
            style={{ height: "1.5rem", width: "1.5rem" }}
          >
            <span className="inline-block leading-none">T</span>
          </div>
          <div className="text-xs text-gray-600">You</div>
        </div>
      </div>
    </div>
  );
}

export default function YouTube() {
  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <Header />
      <Tabs />
      <Video />
      <Shorts />
      <BottomTabs />
    </div>
  );
}
