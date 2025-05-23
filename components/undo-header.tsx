"use client"

import { motion } from "framer-motion"
import UndoIcon from '@/public/undo.svg'
import Icon from "./ui/icon"

// Configuration for the undo history
const UNDO_HISTORY_SIZE = 5

interface UndoHeaderProps {
  undoHistory: number[]
  onUndo: (newHistory: number[], restoredIndex: number) => void
  hideBackButton?: boolean
}

export default function UndoHeader({ undoHistory, onUndo, hideBackButton = false }: UndoHeaderProps) {
  const handleUndo = () => {
    if (undoHistory.length > 0) {
      // Get the most recent index from history and remove it
      const [lastIndex, ...remainingHistory] = undoHistory
      onUndo(remainingHistory, lastIndex)
    }
  }

  return (
    <div className="flex justify-between items-center mt-4 mb-4 border-b border-gray-200 pb-4 px-4">
      {!hideBackButton && (
        <div>
          <Icon iconSvg={UndoIcon} />
        </div>
      )}

      <div>
        <img src="Logo.png" alt="quince logo" className="h-8" />
      </div>

      <div>
        <img src="bag.png" alt="quince logo" className="w-8 h-8" />
      </div>


    </div>
  )
}
