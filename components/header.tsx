"use client"

import UndoIcon from '@/public/undo.svg'
import Icon from "./ui/icon"
import { useRouter } from 'next/navigation'

// Configuration for the undo history
const UNDO_HISTORY_SIZE = 5

interface UndoHeaderProps {
  onUndo?: () => void
  hideBackButton?: boolean
}

export default function Header({ onUndo, hideBackButton = false }: UndoHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mt-4 border-b border-gray-200 pb-4 px-4">
       {!hideBackButton && (
        <div onClick={onUndo}>
           <Icon iconSvg={UndoIcon} />
        </div>
      )}

      <div onClick={() => {
        window.location.href= '/'
        // router.push('/')
      }}>
        <img src="Logo.png" alt="quince logo" className="h-8" />
      </div>

      <div>
        <img src="bag.png" alt="quince logo" className="w-8 h-8" />
      </div>


    </div>
  )
}
