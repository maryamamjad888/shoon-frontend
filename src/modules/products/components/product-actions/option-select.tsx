import React, { useEffect } from "react"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)
  const isColorOption = title.toLowerCase().includes("color")

  useEffect(() => {
    if (!current && filteredOptions.length > 0 && !disabled) {
      updateOption(option.id, filteredOptions[0])
    }
  }, [current, filteredOptions, option.id, updateOption, disabled])

  return (
    <div className="flex flex-col gap-y-3" data-testid={dataTestId}>
      <span className="text-base-semi">{title}</span>
      <div className={clx(
        "flex flex-wrap",
        isColorOption ? "gap-3" : "gap-2"
      )}>
        {filteredOptions.map((v) => {
          const isSelected = v === current

          return (
            <button
              key={v}
              onClick={() => updateOption(option.id, v)}
              disabled={disabled}
              data-testid="option-button"
              className={clx(
                "transition-all",
                isColorOption
                  ? "rounded-full w-10 h-10 p-0" 
                  : "h-10 p-2 text-small-regular",
                {
                  "border-2 border-gray-400": isColorOption && isSelected,
                  "border-2 border-black": !isColorOption && isSelected,
                  "border border-gray-400": isColorOption && !isSelected,
                  "border-gray border": !isSelected,
                }
              )}
              style={
                isColorOption
                  ? {
                      backgroundColor: v.toLowerCase(),
                      color: "transparent",
                    }
                  : {}
              }
            >
              {!isColorOption ? v : <span className="sr-only">{v}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect