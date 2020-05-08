import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

import { fetchWeatherRequest } from 'src/store/weather/actions'
import { selectWeatherData, selectWeatherLoading } from 'src/store/selectors'
import { BACKGROUND_COLOR_MAP } from 'src/constants'

import Loader from 'src/components/Loader'

import styles from './Layout.module.css'

const Layout = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectWeatherLoading())
  const weatherData = useSelector(selectWeatherData())

  const { icon, summary, temperature } = weatherData

  const bgStyle = {
    backgroundColor: BACKGROUND_COLOR_MAP[icon] || BACKGROUND_COLOR_MAP.default,
  }

  useEffect(() => {
    dispatch(fetchWeatherRequest())
  }, [dispatch])

  return (
    <main
      className={classNames(styles.layout, {
        [styles.layoutLoading]: isLoading,
      })}>
      {!isLoading ? (
        <CSSTransition
          classNames={{ ...styles }}
          in={!isLoading}
          timeout={300}
          mountOnEnter
          appear>
          <div className={styles.layoutStage} style={bgStyle}>
            <h1 className={styles.layoutTitle}>
              {summary} ({icon}) &mdash; {Math.round(temperature)}&deg;
            </h1>
          </div>
        </CSSTransition>
      ) : (
        <Loader />
      )}
    </main>
  )
}

export default Layout
