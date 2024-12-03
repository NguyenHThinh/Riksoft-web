import React from 'react'
import AppImage from '../AppImage';
import { useLocales } from '@/locales';
import Link from 'next/link';
import Parser from "html-react-parser"
import { PATH_PAGE } from '@/routes/paths';

interface HeaderProps {
  page?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ page="", title = "" }) => {
  const {t} = useLocales(["common"])

  return (
    <section className="inner-header style-5">
      <div className="container">
        <div className="content">
          <div className="links">
            <Link href={PATH_PAGE.home}> {t('common:home')} </Link>
            <Link href={PATH_PAGE.services} className="ms-1"> { t(`common:${page}`) } </Link>
          </div>
          <h2> { Parser(t(title)) } </h2>
          <AppImage src="/assets/img/header/head7_rock.png" alt="" className="side-img slide_up_down" width={135} height={150}/>
        </div>
      </div>
    </section>
  )
}

export default Header
