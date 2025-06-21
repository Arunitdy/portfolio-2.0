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



(async function fetchPortfolioData() {
  try {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    console.log("✅ Retrieved portfolio data:", data);
    
    const uniqueSet = new Set(data.map(item => item.browser));
    
    console.log("📦 Total documents:", data.length);
    console.log("🔑 Unique deviceId count:", uniqueSet.size);
    console.log("🔑 Unique :", uniqueSet.size);

    return data;
  } catch (error) {
    console.error("❌ Error retrieving portfolio data:", error);
    return [];
  }
})();