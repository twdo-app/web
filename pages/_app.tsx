import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "../styles/globals.css";

import { useState } from "react";
import { FiMusic } from "react-icons/fi";
import Button from "../components/common/Button";
import DimScreen from "../components/common/DimScreen";
import Icon from "../components/common/Icon";
import Modal from "../components/common/Modal";
import { useAuth } from "../lib/hooks/useAuth";

export default function MyApp({
  Component,
  pageProps: { theme, ...pageProps },
}: AppProps) {
  const isLoggedIn = useAuth((state) => state.userIsAuthenticated);
  const [showSoundControls, setShowSoundControls] = useState(isLoggedIn);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Modal />
      <DimScreen />
      {isLoggedIn ? (
        <div className="absolute bottom-10 left-10 flex items-center">
          <Button
            className="mr-4"
            icon={<Icon icon={<FiMusic />} />}
            onClick={() => setShowSoundControls(!showSoundControls)}
          />
          <audio
            className={`transition-all ${
              showSoundControls ? "" : "opacity-0 translate-y-2"
            }`}
            controls
            loop
            src="rain.wav"
          ></audio>
        </div>
      ) : null}
    </ThemeProvider>
  );
}
