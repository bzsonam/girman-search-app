import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Popup = ({ setIsOpen, children }) => {
  return (
    <div
      className="fixed bg-white bg-opacity-60 top-[0] z-2 w-[100%] h-[100vh] flex justify-center items-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="max-w-[70%] bg-white ">{children}</div>
    </div>
  );
};

export default Popup;
