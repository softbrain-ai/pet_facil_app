import React from 'react'
import { Svg, Path } from 'react-native-svg'


interface svgProps {
  color?: string
  size?: number
}

export function PetFacil({ color = 'black', size = 60 }: svgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M0 57H6.66192V39.9386C7.87317 41.1381 9.20131 42.0806 10.6463 42.7661C11.9851 43.5158 13.5045 43.8906 15.2045 43.8906C17.2657 43.8478 19.0295 43.4301 20.4958 42.6375C21.9833 41.8664 23.1839 40.8382 24.0976 39.553C25.0114 38.4605 25.6383 37.0575 25.9783 35.3439C26.297 33.6302 26.4564 30.8027 26.4564 26.8613C26.4564 22.8129 26.297 19.9425 25.9783 18.2503C25.6383 16.5366 25.0114 15.155 24.0976 14.1054C22.2276 11.2993 19.2632 9.84273 15.2045 9.73563C11.7194 9.84273 8.87193 11.1387 6.66192 13.6234V10.1533H0V57ZM13.1963 37.1753C11.7088 37.1753 10.5294 36.854 9.65819 36.2114C8.74443 35.5902 8.07505 34.7762 7.65005 33.7694C7.24629 32.7627 6.98067 31.6381 6.85317 30.3957C6.72567 29.2176 6.66192 28.0395 6.66192 26.8613C6.66192 25.5975 6.72567 24.3444 6.85317 23.102C6.98067 21.9239 7.24629 20.8315 7.65005 19.8247C8.07505 18.8179 8.74443 18.0039 9.65819 17.3828C10.5294 16.7616 11.7088 16.451 13.1963 16.451C14.7688 16.451 16.012 16.7187 16.9257 17.2542C17.8395 17.8326 18.4876 18.6251 18.8701 19.6319C19.2951 20.5958 19.582 21.7097 19.7307 22.9735C19.7732 24.2373 19.7945 25.5333 19.7945 26.8613C19.7945 28.1251 19.7732 29.3568 19.7307 30.5564C19.582 31.7773 19.2951 32.8912 18.8701 33.898C18.4876 34.8619 17.8395 35.6545 16.9257 36.2757C16.012 36.8754 14.7688 37.1753 13.1963 37.1753Z" fill="white" />
      <Path d="M54.3523 29.3675V23.841C54.3098 19.4498 52.9604 16.0011 50.3042 13.4949C47.6904 11.0316 44.4923 9.77847 40.7097 9.73563C39.1372 9.73563 37.5435 10.0248 35.9284 10.6032C34.2922 11.1815 32.8153 12.124 31.4978 13.4307C30.2015 14.7159 29.139 16.4724 28.3103 18.7001C27.4815 20.885 27.0671 23.6268 27.0671 26.9256C27.0671 30.3529 27.5453 33.1375 28.5015 35.2796C29.3728 37.5073 30.5097 39.2424 31.9122 40.4848C32.6347 41.0846 33.4103 41.5879 34.2391 41.9949C35.0253 42.4662 35.8328 42.841 36.6616 43.1195C38.3191 43.6336 40.0191 43.8906 41.7616 43.8906C46.3304 43.9335 50.3042 42.1342 53.6829 38.4927L48.8698 34.3478C46.7448 36.5113 44.3329 37.593 41.6341 37.593C39.3178 37.593 37.4478 36.8861 36.0241 35.4724C34.4941 34.08 33.7291 32.0451 33.7291 29.3675H54.3523ZM33.7291 23.841C33.8566 21.2492 34.5472 19.2892 35.8009 17.9611C37.076 16.6973 38.7122 16.0654 40.7097 16.0654C42.7072 16.0654 44.3435 16.6973 45.6185 17.9611C46.9148 19.2892 47.6054 21.2492 47.6904 23.841H33.7291Z" fill="white" />
      <Path d="M56.493 10.1533H53.178V15.2621H56.493V35.2796C56.493 37.9143 57.2581 39.9278 58.7881 41.3202C60.2756 42.7768 62.1881 43.5051 64.5256 43.5051H68V37.1753H65.5137C63.8987 37.2182 63.1125 36.3935 63.155 34.7012V15.2621H68V10.1533H63.155V0H56.493V10.1533Z" fill="white" />
      <Path d="M41.9697 59.8947H43.8997V52.1842H45.8298V50.7895H43.8997V49.5877C43.8751 49.0673 44.1522 48.8158 44.7309 48.8333H45.8298V47.1053H44.5831C43.8382 47.1053 43.2194 47.2953 42.7269 47.6754C42.2221 48.0848 41.9697 48.7222 41.9697 49.5877V50.7895H41V52.1842H41.9697V59.8947Z" fill="white" />
      <Path d="M51.2998 59.8947H53.2299V53.6754C53.2176 52.5643 52.8513 51.7807 52.1309 51.3246C51.4106 50.8801 50.4471 50.6637 49.2404 50.6754C47.8121 50.652 46.7316 51.0965 45.999 52.0088L47.5135 53.1053C47.6797 52.8421 47.9075 52.655 48.1969 52.5439C48.4739 52.4503 48.8526 52.4035 49.3328 52.4035C50.6564 52.3801 51.3121 52.769 51.2998 53.5702V54.5263H48.6309C47.6089 54.538 46.8332 54.8012 46.3038 55.3158C45.7743 55.8187 45.5096 56.4532 45.5096 57.2193C45.5096 58.0205 45.8143 58.6784 46.4238 59.193C47.0025 59.7193 47.8275 59.9883 48.8987 60C49.5513 60 50.0623 59.924 50.4317 59.7719C50.8073 59.6257 51.0843 59.3977 51.2629 59.0877H51.2998V59.8947ZM51.2998 56.693C51.2998 57.3772 51.149 57.8158 50.8473 58.0088C50.5148 58.2018 49.9454 58.2924 49.1389 58.2807C48.4986 58.2807 48.0399 58.1608 47.7629 57.9211C47.4735 57.7047 47.3288 57.4415 47.3288 57.1316C47.3165 56.424 47.8706 56.0585 48.9911 56.0351H51.2998V56.693ZM48.3724 49.6228H49.9608L52.6481 47H50.1085L48.3724 49.6228Z" fill="white" />
      <Path d="M60.6946 57.2193C60.2082 57.8392 59.5587 58.155 58.746 58.1667C57.1084 58.1959 56.2773 57.2573 56.2526 55.3509C56.2773 53.4327 57.1084 52.4854 58.746 52.5088C59.5587 52.5322 60.2082 52.8509 60.6946 53.4649L62.1168 52.2632C61.6981 51.7836 61.2056 51.4006 60.6392 51.114C60.0728 50.8333 59.4171 50.6871 58.6722 50.6754C57.5394 50.6637 56.5451 51.0234 55.6893 51.7544C54.8028 52.4971 54.3472 53.6959 54.3226 55.3509C54.3472 56.9883 54.8028 58.1725 55.6893 58.9035C56.5451 59.6345 57.5394 60 58.6722 60C59.4171 59.9883 60.0728 59.8333 60.6392 59.5351C61.2056 59.2485 61.6981 58.8772 62.1168 58.4211L60.6946 57.2193Z" fill="white" />
      <Path d="M62.8585 59.8947H64.7886V50.7895H62.8585V59.8947ZM62.8585 48.9386H64.7886V47.1053H62.8585V48.9386Z" fill="white" />
      <Path d="M66.6847 57.6842C66.6847 58.4854 66.9248 59.0556 67.405 59.3947C67.8606 59.7281 68.4393 59.8947 69.1412 59.8947H70V58.1667H69.3351C68.8549 58.1667 68.6148 57.9591 68.6148 57.5439V47.1053H66.6847V57.6842Z" fill="white" />
    </Svg>
  );
}