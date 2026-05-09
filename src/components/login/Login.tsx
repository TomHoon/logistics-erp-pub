import s from '@/components/login/Login.module.css'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'

export default function Login() {
  return (
    <div className={s.container}>
      <div className={ s.contentWrapper }>
        {/* 좌측 로그인폼 영역 */}
        <section className={s.loginForm}>
          <div className={s.loginFormWrapper}>
            <div className={s.top}>
              <img src="login/logo.png" alt="" />
              <Button variant="outline">Sign Up</Button>
            </div>

            {/* 문구영역 */}
            <div className={ s.welcome }>
              <span>Welcome back!</span>
              <p>Please Sign In</p>
            </div>

            {/* 로그인영역 */}
            <div className={s.form}>
              <div className={ s.formSection }>
                <label htmlFor="email">Email Address</label>
                <Input id="email" className='w-[350px] h-[50px]' placeholder='Enter email address'/>
              </div>

              <div className={ s.formSection }>
                <label htmlFor="password">Password</label>
                <Input id="password" className='w-[350px] h-[50px]' placeholder='Enter email address'/>
              </div>
            </div>

            {/* RememberMe */}
            <div className={ s.rememberme }>
              <div className={ s.checkSection }>
                <Checkbox />
                <span>Remember me</span>
              </div>
              <div className={ s.forgot }>
                <span>비밀번호 찾기</span>
              </div>
            </div>

            {/* 로그인버튼 */}
            <div>
              <Button className='w-[350px] h-[50px] mt-10'>Login</Button>
            </div>
          </div>
        </section>
        
        {/* 우측 이미지영역 */}
        <section className={ s.imageSection }>
          <img src="login/login-image.png" alt="" />
        </section>
      </div>
    </div>
  )
}