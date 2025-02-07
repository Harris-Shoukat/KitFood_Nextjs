import Modal from "react-modal";

export default function ModalConfirmOrder({ isOpen, setIsOpen, closeModal }) {
    

    return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal} // Close the modal when requested (e.g., clicking outside)
      className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Order Confirmed!</h2>
        <p className="text-lg mb-6">Your order has been confirmed successfully.</p>
        <button
          onClick={closeModal} // Close the modal when clicking this button
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Close Modal
        </button>
      </div>
    </Modal>
  );
}
