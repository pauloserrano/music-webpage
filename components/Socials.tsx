import Link from "next/link"
import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill } from "react-icons/ri"

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />
  },
  {
    path: "#",
    icon: <RiInstagramFill />
  },
  {
    path: "#",
    icon: <RiSpotifyFill />
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />
  },
]

interface SocialsProps {
  containerStyles?: string,
  iconStyles?: string
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, id) => (
        <Link
          key={id}
          href={social.path}
          target="_blank"
        >
          <div className={`${iconStyles}`}>
            {social.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}
