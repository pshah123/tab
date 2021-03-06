
import adsEnabled from './adsEnabledStatus'
import googleDisplayAd from './google/googleDisplayAd'
import mockDisplayAd from './mockDisplayAd'

export default function (adId) {
  if (adsEnabled) {
    googleDisplayAd(adId)
  } else {
    mockDisplayAd(adId)
  }
}
