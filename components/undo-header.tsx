"use client"

import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"

// Configuration for the undo history
const UNDO_HISTORY_SIZE = 5

interface UndoHeaderProps {
  undoHistory: number[]
  onUndo: (newHistory: number[], restoredIndex: number) => void
}

export default function UndoHeader({ undoHistory, onUndo }: UndoHeaderProps) {
  const handleUndo = () => {
    if (undoHistory.length > 0) {
      // Get the most recent index from history and remove it
      const [lastIndex, ...remainingHistory] = undoHistory
      onUndo(remainingHistory, lastIndex)
    }
  }

  return (
    <div className="mb-4 bg-white rounded-lg shadow-md p-3">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-sm font-medium text-gray-700">Recently Discarded</h2>
          <p className="text-xs text-gray-500">
            {undoHistory.length > 0
              ? `${undoHistory.length} product${undoHistory.length > 1 ? "s" : ""} in history`
              : "No discarded products"}
          </p>
        </div>
        <motion.button
          className={`bg-white border border-gray-200 text-gray-800 px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5 ${
            undoHistory.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
          }`}
          onClick={handleUndo}
          disabled={undoHistory.length === 0}
          whileHover={undoHistory.length > 0 ? { scale: 1.03 } : {}}
          whileTap={undoHistory.length > 0 ? { scale: 0.97 } : {}}
        >
          <RotateCcw size={14} />
          <span className="text-sm font-medium">
            Undo ({undoHistory.length}/{UNDO_HISTORY_SIZE})
          </span>
        </motion.button>
      </div>
    </div>
  )
}
