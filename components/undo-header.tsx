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
    <div className="flex justify-between items-center mt-4 mb-4">
       <div>
        <img src="undo.png" alt="go back" className="" />
      </div>

      <div>
        <img src="Logo.png" alt="quince logo" className="h-8" />
      </div>

      <div>
        <img src="bag.png" alt="quince logo" className="w-8 h-8" />
      </div>


    </div>
  )
}
