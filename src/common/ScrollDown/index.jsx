import { useEffect , useState} from "react";
import { useLocation } from "react-router-dom";

export default function ScrollDown() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {window.scrollTo({ top: 850, behavior: 'smooth' });}, 100)       
  }, [pathname]);

  return null;
}