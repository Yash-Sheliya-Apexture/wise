// frontend/app/dashboard/transactions/[transactionId]/components/TransactionDetailsContent.tsx
import React, { useState } from 'react';
import { PaymentDetails, TransferDetails } from '../../../../types/transaction'; // Adjust path
import { Button } from "@/components/ui/button"; // Adjust path

interface TransactionDetailsContentProps {
    transaction: PaymentDetails | TransferDetails;
    note: string;
    onNoteChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    formatDisplayDate: (dateString: string | undefined) => string;
}

const TransactionDetailsContent: React.FC<TransactionDetailsContentProps> = ({
    transaction,
    note,
    onNoteChange,
    formatDisplayDate
}) => {
    const [copySuccess, setCopySuccess] = useState<string | null>(null);
    const isPayment = transaction.type === 'payment';
    const isTransfer = transaction.type === 'transfer';

    const handleCopyToClipboard = (text: string | undefined | null, fieldName: string) => {
        if (!text) {
            setCopySuccess(`${fieldName} is empty.`);
            setTimeout(() => setCopySuccess(null), 1500);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(`${fieldName} copied!`);
            setTimeout(() => setCopySuccess(null), 1500);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert(`Could not copy ${fieldName}. You may need to copy it manually.`);
        });
    };

    const paymentDetails = transaction as PaymentDetails;
    const transferDetails = transaction as TransferDetails;

    return (
        <div className="space-y-8">
            {/* Section 1: Transaction Breakdown */}
            <div>
                <h3 className="text-base font-semibold mb-4 text-neutral-900 dark:text-white border-b dark:border-border pb-2">
                    Transaction Breakdown
                </h3>
                <dl className="space-y-3 text-sm">
                    {isPayment && (
                        <>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Amount to Add</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{`${paymentDetails.amountToAdd.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${paymentDetails.balanceCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Wise Fee</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{`${paymentDetails.wiseFee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${paymentDetails.payInCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Bank Transfer Fee</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{`${paymentDetails.bankTransferFee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${paymentDetails.payInCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center border-t dark:border-border pt-3 mt-2"> <dt className="text-gray-500 dark:text-gray-400 font-semibold">Total Amount to Pay</dt> <dd className="font-semibold text-neutral-900 dark:text-white">{`${paymentDetails.amountToPay.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${paymentDetails.payInCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center mt-2"> <dt className="text-gray-500 dark:text-gray-400">Guaranteed Rate</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">1 {paymentDetails.payInCurrency?.code} = {paymentDetails.exchangeRate.toFixed(4)} {paymentDetails.balanceCurrency?.code}</dd> </div>
                            {paymentDetails.failureReason && <div className="flex justify-between items-start text-red-600 dark:text-red-400 pt-3 border-t dark:border-border mt-3"> <dt className="font-medium">Failure Reason</dt> <dd className="text-right ml-4">{paymentDetails.failureReason}</dd> </div>}
                        </>
                    )}
                    {isTransfer && (
                        <>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">You Sent</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{`${transferDetails.sendAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${transferDetails.sendCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Total Fees</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{`${transferDetails.fees.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${transferDetails.sendCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Amount Converted</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{`${(transferDetails.sendAmount - transferDetails.fees).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${transferDetails.sendCurrency?.code}`}</dd> </div>
                            <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Guaranteed Rate</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">1 {transferDetails.sendCurrency?.code} = {transferDetails.exchangeRate.toFixed(4)} {transferDetails.receiveCurrency?.code}</dd> </div>
                            <div className="flex justify-between items-center border-t dark:border-border pt-3 mt-2"> <dt className="text-gray-500 dark:text-gray-400 font-semibold">Recipient Gets</dt> <dd className="font-semibold text-neutral-900 dark:text-white">{`${transferDetails.receiveAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${transferDetails.receiveCurrency?.code}`}</dd> </div>
                            {transferDetails.failureReason && <div className="flex justify-between items-start text-red-600 dark:text-red-400 pt-3 border-t dark:border-border mt-3"> <dt className="font-medium">Failure Reason</dt> <dd className="text-right ml-4">{transferDetails.failureReason}</dd> </div>}
                        </>
                    )}
                    <div className="flex justify-between items-center pt-3 border-t dark:border-border mt-3"> <dt className="text-gray-500 dark:text-gray-400">Date Initiated</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{formatDisplayDate(transaction.createdAt)}</dd> </div>
                    <div className="flex justify-between items-center"> <dt className="text-gray-500 dark:text-gray-400">Last Updated</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200">{formatDisplayDate(transaction.updatedAt)}</dd> </div>
                    <div className="flex justify-between items-center">
                        <dt className="text-gray-500 dark:text-gray-400">{isPayment ? 'Reference Code' : 'Transfer ID'}</dt>
                        <dd className="font-medium text-neutral-800 dark:text-neutral-200 break-all text-right ml-4">
                            {isPayment ? paymentDetails.referenceCode || 'N/A' : transaction._id}
                        </dd>
                    </div>
                </dl>
            </div>

            {/* Section 2: Pay-in Bank Details / Recipient Details */}
            <div>
                <h3 className="text-base font-semibold mb-4 text-neutral-900 dark:text-white border-b dark:border-border pb-2">
                    {isPayment ? 'Pay-in Bank Details (Send Payment Here)' : 'Recipient Details'}
                </h3>
                {isPayment && paymentDetails.bankDetails && (
                    <div className="space-y-3 text-sm">
                        {/* Payee Name */}
                        <div className="bg-gray-50 dark:bg-white/5 border dark:border-border p-3 rounded-md flex justify-between items-center gap-2">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Payee Name</p>
                                <p className="font-semibold text-neutral-800 dark:text-neutral-200">{paymentDetails.bankDetails?.payeeName || 'N/A'}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => handleCopyToClipboard(paymentDetails.bankDetails?.payeeName, 'Payee name')} className="text-primary hover:text-primaryhover dark:hover:bg-primaryhover/10 px-2 py-1 h-auto text-xs shrink-0">Copy</Button>
                        </div>
                        {/* IBAN */}
                        <div className="bg-gray-50 dark:bg-white/5 border dark:border-border p-3 rounded-md flex justify-between items-center gap-2">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">IBAN</p>
                                <p className="font-semibold text-neutral-800 dark:text-neutral-200 break-all">{paymentDetails.bankDetails?.iban || 'N/A'}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => handleCopyToClipboard(paymentDetails.bankDetails?.iban, 'IBAN')} className="text-primary hover:text-primaryhover dark:hover:bg-primaryhover/10 px-2 py-1 h-auto text-xs shrink-0">Copy</Button>
                        </div>
                        {/* BIC/SWIFT */}
                        <div className="bg-gray-50 dark:bg-white/5 border dark:border-border p-3 rounded-md flex justify-between items-center gap-2">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Bank code (BIC/SWIFT)</p>
                                <p className="font-semibold text-neutral-800 dark:text-neutral-200">{paymentDetails.bankDetails?.bicSwift || 'N/A'}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => handleCopyToClipboard(paymentDetails.bankDetails?.bicSwift, 'BIC/SWIFT')} className="text-primary hover:text-primaryhover dark:hover:bg-primaryhover/10 px-2 py-1 h-auto text-xs shrink-0">Copy</Button>
                        </div>
                        {/* Reference Code */}
                        {paymentDetails.referenceCode && (
                            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 p-3 rounded-md flex justify-between items-center gap-2">
                                <div>
                                    <p className="text-xs text-blue-600 dark:text-blue-300 mb-0.5 font-semibold">IMPORTANT: Reference Code</p>
                                    <p className="font-bold text-blue-800 dark:text-blue-200 text-base break-all">{paymentDetails.referenceCode}</p>
                                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">You MUST include this code as the payment reference/description when sending money from your bank.</p>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => handleCopyToClipboard(paymentDetails.referenceCode, 'Reference Code')} className="text-primary hover:text-primaryhover dark:hover:bg-primaryhover/10 px-2 py-1 h-auto text-xs shrink-0 self-start mt-1">Copy</Button>
                            </div>
                        )}
                        {/* Bank Address */}
                        <div className="bg-gray-50 dark:bg-white/5 border dark:border-border p-3 rounded-md">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Bank Address</p>
                            <p className="font-semibold text-neutral-800 dark:text-neutral-200 whitespace-pre-line">{paymentDetails.bankDetails?.bankAddress || 'N/A'}</p>
                        </div>
                    </div>
                 )}
                 {isPayment && !paymentDetails.bankDetails && (
                     <p className="text-sm text-gray-500 dark:text-gray-400">Bank details for payment are not available for this transaction.</p>
                 )}

                 {isTransfer && transferDetails.recipient && (
                    <dl className="space-y-2 text-sm">
                         <div className="flex justify-between"> <dt className="text-gray-500 dark:text-gray-400">Name</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right">{transferDetails.recipient.accountHolderName}</dd> </div>
                         {transferDetails.recipient.nickname && <div className="flex justify-between"> <dt className="text-gray-500 dark:text-gray-400">Nickname</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right">{transferDetails.recipient.nickname}</dd> </div>}
                         <div className="flex justify-between"> <dt className="text-gray-500 dark:text-gray-400">Receiving Currency</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right">{transferDetails.recipient.currency?.code}</dd> </div>
                         <div className="flex justify-between"> <dt className="text-gray-500 dark:text-gray-400">Account Number</dt> <dd className="font-mono text-neutral-800 dark:text-neutral-200 text-right">**** **** {transferDetails.recipient.accountNumber?.slice(-4)}</dd> </div>
                         <div className="flex justify-between"> <dt className="text-gray-500 dark:text-gray-400">Bank Name</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right">{transferDetails.recipient.bankName}</dd> </div>
                         {transferDetails.reference && <div className="flex justify-between pt-2 border-t dark:border-border mt-2"> <dt className="text-gray-500 dark:text-gray-400">Reference for Recipient</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right ml-4">{transferDetails.reference}</dd> </div>}
                         {transferDetails.reason && <div className="flex justify-between"> <dt className="text-gray-500 dark:text-gray-400">Reason for Transfer</dt> <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right ml-4">{transferDetails.reason}</dd> </div>}
                    </dl>
                 )}
                  {isTransfer && !transferDetails.recipient && (
                     <p className="text-sm text-gray-500 dark:text-gray-400">Recipient details are not available for this transfer.</p>
                 )}

                 {/* Copy Feedback Message Area */}
                 <div className="h-5 mt-2 text-center">
                    {copySuccess && (
                        <p className="text-sm text-green-600 dark:text-green-400 transition-opacity duration-300 ease-in-out">
                            {copySuccess}
                        </p>
                    )}
                 </div>
            </div>

             {/* Section 3: Note Section */}
             <div>
                 <h3 className="text-base font-semibold mb-2 text-neutral-900 dark:text-white">Note (for your reference only)</h3>
                 <textarea
                    id="transactionNote"
                    className="w-full bg-white dark:bg-white/5 rounded-md p-3 text-sm text-neutral-700 dark:text-gray-300 border dark:border-border focus:ring-1 focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary dark:placeholder-gray-500 transition duration-150 ease-in-out"
                    placeholder="Add personal notes about this transaction..."
                    value={note}
                    onChange={onNoteChange}
                    rows={3}
                    aria-label="Transaction Note"
                />
                 {/* <Button size="sm" variant="outline" className="mt-2">Save Note</Button> */}
            </div>
        </div>
    );
};

export default TransactionDetailsContent;