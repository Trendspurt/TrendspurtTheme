import { useRouter } from 'next/router'

export default function(props) {
  if (process.browser) {
    const router = useRouter();
    router.push(props.url)
  }
  return (<div></div>);
}