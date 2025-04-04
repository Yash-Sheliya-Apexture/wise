"use client";
import React from "react";
import { formatFullDateTime } from "../../../utils/helpers"; // Adjust path

interface TransferInfoCardProps {
  transfer: any; // Consider creating a Transfer type/interface
}

const TransferInfoCard: React.FC<TransferInfoCardProps> = ({ transfer }) => {
  if (!transfer) return null;

  return (
    <div className="bg-white dark:bg-primarybox rounded-xl border overflow-hidden">
      <div className="bg-lightgray dark:bg-secondarybox px-6 py-4">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Transfer Information</h3>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-1">Transfer ID</p>
          <div className="text-sm bg-lightgray dark:bg-primarybox px-3 py-3 rounded-lg border break-all">
            {transfer._id}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-1">Created On</p>
          <div className="text-sm bg-lightgray dark:bg-primarybox px-3 py-3 rounded-lg border">
            {formatFullDateTime(transfer.createdAt)}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-1">Last Updated</p>
          <div className="text-sm bg-lightgray dark:bg-primarybox px-3 py-3 rounded-lg border">
            {formatFullDateTime(transfer.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferInfoCard;