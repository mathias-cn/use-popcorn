import { ReactNode, useState } from "react"
import { BoxTitle } from "./components/box-title"
import { Button } from "../utils/button"

interface BoxProps {
    boxTitleData?: {
        title: string
        otherData: (string | number)[]
    }
    titleDisplayedOnCloseOnly?: boolean
    children: ReactNode
  }

export function Box({ boxTitleData, titleDisplayedOnCloseOnly, children }: BoxProps) {
    const [boxOpen, setBoxOpen] = useState(true)

    return (
        <div 
            className={`relative bg-gray-700 rounded-lg w-full divide-y-[1px] divide-gray-600 overflow-y-auto ${boxOpen ? "box-open" : "box-closed"} sm:w-[calc(50%-6px)] sm:h-${boxOpen ? "screen" : "24 sm:overflow-y-hidden"}`}
        >
            <Button onClick={() => setBoxOpen(!boxOpen)} btnType="roundedSm" position="absoluteRight">
                {boxOpen ? <span>➖</span> : <span>➕</span>}
            </Button>

            {!titleDisplayedOnCloseOnly && boxTitleData && 
                <BoxTitle 
                    title={boxTitleData.title}
                    otherData={boxTitleData.otherData}
                />
            }
            {titleDisplayedOnCloseOnly && !boxOpen && boxTitleData &&
                <BoxTitle 
                    title={boxTitleData.title}
                    otherData={boxTitleData.otherData}
                />
            }

            {boxOpen && children}
        </div>
    )
}