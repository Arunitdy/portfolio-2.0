import { useState, useEffect, useRef } from "react";
import { db, collection, addDoc } from "../src/firebase/firebaseConfig"; // Import Firestore config

export const DeviceDetails = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const hasRun = useRef(false); // ✅ Track first execution

  useEffect(() => {
    const getDeviceDetails = async () => {
      if (hasRun.current) return; // ✅ Prevent second execution
      hasRun.current = true;

      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const details = {
        browser: navigator.userAgent,
        os: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        language: navigator.language,
        isMobile: isMobile ? "Mobile Device" : "Desktop Device",
        timestamp: new Date().toISOString(), // Store timestamp
      };

      setDeviceInfo(details);
      console.log("Device Info:", details);

      try {
        await addDoc(collection(db, "portfolio"), details);
        console.log("✅ Device info added to Firestore");
      } catch (error) {
        console.error("❌ Error adding device info:", error);
      }
    };

    getDeviceDetails();
  }, []);

  return null; // No UI needed
};
