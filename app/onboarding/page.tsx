'use client'

import classnames from 'classnames'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import ChevronDownIcon from '@/public/ChevronDown.inline.svg'

import OnboardingSelector from './onboarding-selector'
import styles from './styles.module.scss'
import { updateUserPreference } from '@/service'

export default function Onboarding() {
  const router = useRouter()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const handleSelectedInterests = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  const handleUpdateUserPreference = async () => {
    const res = await updateUserPreference(selectedInterests)
    console.log('res', res)
    return res;
  }

  const handleContinue = async () => {
    console.log('selectedInterests', selectedInterests)
    const res = await handleUpdateUserPreference()
    if (res) {
      router.push('/')
    } else {
      console.error('Unable to update user preference')
    }
  }

  return (
    <div className={styles.onboardingLayout}>
      <div className={styles.heading}>
        <Icon
          iconSvg={ChevronDownIcon}
          className={styles.backBtn}
          onClick={() => {
            router.push('/')
          }}
        />

        <div
          className={styles.skip}
          onClick={() => {
            router.push('/')
          }}
        >
          SKIP
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>Interests</h2>
          <p className={styles.description}>Which categories catch your eye?</p>
        </div>
        <OnboardingSelector selectedInterests={selectedInterests} handleSelectedInterests={handleSelectedInterests} />
      </div>
      <div className={styles.footer}>
        <Button
          onClick={handleContinue}
          disabled={selectedInterests.length === 0}
          className={classnames(styles.continueBtn, {
            [styles.continueBtn__disabled]: selectedInterests.length === 0,
            [styles.continueBtn__active]: selectedInterests.length > 0,
          })}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  )
}
