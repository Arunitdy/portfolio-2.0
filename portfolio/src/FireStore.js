import { useState, useEffect, useRef } from "react";
import { db, collection, addDoc } from "../src/firebase/firebaseConfig";
import {  getDocs } from "firebase/firestore";

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
        timestamp: new Date().toString(), // Store timestamp
      };

      setDeviceInfo(details);
      console.log("Device Info:", details);

      try {
        await addDoc(collection(db, "portfolio"), details);
        console.log("✅ Device info added to Firestore");
        console.log(details.timestamp)
      } catch (error) {
        console.error("❌ Error adding device info:", error);
      }
    };

    getDeviceDetails();
  }, []);

  return null; // No UI needed
};
(async function fetchUniqueDevices() {
  try {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    console.log("✅ Retrieved portfolio data:", data);

    // Track seen combinations
    const seen = new Set();
    const uniqueDevices = [];

    for (const item of data) {
      const signature = `${item.browser}`; // Add more fields if needed (e.g., item.os + item.browser)
      
      if (!seen.has(signature)) {
        seen.add(signature);
        uniqueDevices.push(item);
      }
    }

    // ✅ Sort by date (newest to oldest)
    uniqueDevices.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));


    console.log("📦 Total documents:", data.length);
    console.log("🔑 Unique device count:", uniqueDevices.length);
    console.log("📄 Unique devices (sorted):", uniqueDevices);

    return uniqueDevices;
  } catch (error) {
    console.error("❌ Error retrieving portfolio data:", error);
    return [];
  }
})();
