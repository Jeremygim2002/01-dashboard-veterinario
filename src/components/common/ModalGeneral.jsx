// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ModalGeneral = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 flex justify-center"
        >
          <div className="mt-10 bg-superficie opacity-100 text-white border border-gray-700 shadow-xl rounded-xl p-6 w-full max-w-xl relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalGeneral;
