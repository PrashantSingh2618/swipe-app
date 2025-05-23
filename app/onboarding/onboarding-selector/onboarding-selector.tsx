'use client'

import classNames from 'classnames'

import { Icon } from '@/components/ui/icon'
import Image from 'next/image'
import GreenTickIcon from '@/public/black_check_box.svg'
import PlusIcon from '@/public/plus.svg'

import { INTERESTS } from '../constants'

import styles from './onboarding-selector.module.scss'

function OnboardingSelector({
  selectedInterests,
  handleSelectedInterests,
}: {
  selectedInterests: string[]
  handleSelectedInterests: (interest: string) => void
}) {
  return (
    <div className={styles.onboardingSelectorContainer}>
      {INTERESTS.map(interest => (
        <div
          key={interest.id}
          className={styles.onboardingSelector}
          onClick={() => {
            handleSelectedInterests(interest.divisionName)
          }}
        >
          <Image
            src={interest.image}
            title={interest.divisionName}
            alt={interest.divisionName}
            className={styles.image}
            width={110}
            height={150}
          />
          <div
            className={classNames({
              [styles.imageOverlay]: selectedInterests.includes(interest.divisionName),
            })}
          />
          <div
            className={classNames(styles.iconContainer, {
              [styles.iconContainer__selected]: selectedInterests.includes(interest.divisionName),
            })}
          >
            {selectedInterests.includes(interest.divisionName) ? (
              <Icon iconSvg={GreenTickIcon} className={styles.tickIcon} />
            ) : (
              <Icon iconSvg={PlusIcon} className={styles.plusIcon} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OnboardingSelector
