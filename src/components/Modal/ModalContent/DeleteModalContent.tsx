import React from 'react';

interface DeleteModalContentProps {
  handleCancelDelete: () => void;
  handleConfirmDelete: () => void;
}

const DeleteModalContent: React.FC<DeleteModalContentProps> = ({
  handleCancelDelete,
  handleConfirmDelete,
}) => {
  return (
    <div>
      {' '}
      <div className="text-sm font-medium text-slate-500 p-8 ">
        Are you sure you want to delete this merchant?
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleCancelDelete}
        >
          Cancel
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleConfirmDelete}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteModalContent;
