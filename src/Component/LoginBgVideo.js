import videoPoster from "../Assets/img/mobileBg.png";
import loginVideo from "../Assets/video/videoBg.mp4";

function LoginBgVideo() {
  //background video running on login, forgot password and reset password page

  return (
    <video
      playsInline
      preload="true"
      autoPlay="autoplay"
      muted
      loop
      className="bgVideo"
      poster={videoPoster}
    >
      <source src={loginVideo} type="video/mp4" />
    </video>
  );
}
export default LoginBgVideo;
