import Head from "next/head";
import Link from "next/link";

const Welcome = () => (
  <>
    <Head>
      <title>Welcome to Shop!</title>
    </Head>

    <div className="welcome">
      <header className="welcome__top">

      </header>
      <section className="welcome__main">

      </section>

      <style jsx global>{`
                @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto+Slab:300,700");

                body {
                    margin: 0;
                }

                .welcome {
                    height: 100vh;
                    width: 100vw;
                    text-align: center;
                    color: #1d1e1c;
                    font-family: "Open Sans", sans-serif;
                    font-size: 14px;
                    overflow: auto;
                    background-color: #ececec;
                }

                .welcome a {
                    text-decoration: none;
                    color: #38a9b4;
                    font-weight: bold;
                }

                .welcome h1 {
                    font-family: "Roboto Slab", serif;
                    font-weight: 300;
                    font-size: 36px;
                    margin: 0 0 10px;
                    line-height: 30px;
                }

                .welcome h1 strong {
                    font-weight: 700;
                    color: #38a9b4;
                }

                .welcome h2 {
                    text-transform: uppercase;
                    font-size: 18px;
                    font-weight: bold;
                    margin: 25px 0 5px;
                }

                .welcome h3 {
                    text-transform: uppercase;
                    font-weight: 500;
                    color: #38a9b4;
                    font-size: 16px;
                    margin: 0 0 5px;
                    display: block;
                }

                /***** TOP *****/

                .welcome__top {
                    background-color: #67cece;
                    padding-bottom: 40px;
                }

                .welcome__flag {
                    transform: rotate(30deg);
                    position: fixed;
                    right: -190px;
                    top: 65px;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
                    z-index: 5;
                }

                /***** MAIN *****/

                .welcome__main {
                    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                        0 1px 18px 0 rgba(0, 0, 0, 0.12),
                        0 3px 5px -1px rgba(0, 0, 0, 0.3);
                    width: 80%;
                    max-width: 1100px;
                    margin-left: auto;
                    margin-right: auto;
                    transform: translateY(-50px);
                    background-color: white;
                    display: flex;
                }

                .main__aside {
                    background-color: #afe5e5;
                    width: 30%;
                    position: relative;
                    overflow: hidden;
                }

                .aside__circle,
                .main__aside svg {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }

                .aside__circle {
                    background-color: white;
                    border-radius: 50%;
                    width: 90%;
                    height: 0;
                    padding-bottom: 90%;
                }

                .aside__circle:after {
                    content: "";
                    width: 4px;
                    left: calc(50% - 5px);
                    top: -50%;
                    position: absolute;
                    height: 100%;
                    background-color: #1d1e1c;
                }

                .main__aside svg {
                    width: 100%;
                }

                .main__content {
                    padding: 30px;
                    text-align: left;
                    flex: auto;
                }
                .other__bloc {
                    display: inline-flex;
                    align-items: center;
                    border: 4px solid #afe5e5;
                    padding: 10px 20px;
                    margin: 10px 0;
                    height: 170px;
                    box-sizing: border-box;
                    text-align: left;
                    width: 40%;
                }

                .other__bloc:not(:last-of-type) {
                    margin-right: 10px;
                }

                .other__bloc h3:not(:first-child) {
                    margin-top: 15px;
                    padding-top: 5px;
                }

                .other__circle {
                    width: 110px;
                    height: 110px;
                    background-color: #afe5e5;
                    border-radius: 50%;
                    margin-right: 20px;
                }

                .other__circle svg {
                    width: 110px;
                }

                .buttons__group {
                    display: inline-flex;
                    vertical-align: center;
                }

                .buttons__group .buttons__or {
                    width: 4px;
                    position: relative;
                    text-align: center;
                }

                .buttons__group .buttons__or:before {
                    content: "or";
                    font-size: 12px;
                    color: #aaa;
                    line-height: 18px;
                    position: absolute;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    width: 18px;
                    height: 18px;
                }

                .buttons__group .other__button:first-child {
                    border-radius: 5px 0 0 5px;
                    padding-right: 15px;
                }

                .buttons__group .other__button:last-child {
                    border-radius: 0 5px 5px 0;
                    padding-left: 15px;
                }

                a.other__button {
                    background-color: #e0e1e2;
                    font-size: 11px;
                    color: #686e63;
                    cursor: pointer;
                    padding: 5px 10px;
                    display: inline-block;
                    transition: all ease 0.2s;
                    text-transform: uppercase;
                }

                .other__button:hover {
                    background-color: #afe5e5;
                    color: #339ba5;
                }

                .main__button {
                    display: inline-block;
                    padding: 10px 50px 10px 10px;
                    border: 3px solid #339ba5;
                    font-size: 22px;
                    color: #339ba5;
                    text-transform: uppercase;
                    margin: 15px 0;
                    overflow: hidden;
                    transition: all ease 0.3s;
                    cursor: pointer;
                    position: relative;
                }

                .main__button svg {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: transform ease 0.2s;
                }

                .main__button:hover {
                    background-color: #afe5e5;
                }

                .main__button:hover svg {
                    transform: translateY(-50%) rotate(35deg);
                }

                /***** HELP *****/

                .welcome__help {
                    background-color: white;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
                    padding: 10px;
                    position: fixed;
                    right: -5px;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 5px;
                    text-align: center;
                }

                .welcome__help h2 {
                    color: #aaa;
                    font-size: 12px;
                    margin: 10px 0;
                }

                .help__circle {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 2px solid #ccc;
                    display: block;
                    margin: 10px auto;
                    transition: all ease 0.2s;
                    position: relative;
                }

                .help__circle svg {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }

                .help__circle:hover {
                    border-color: #67cece;
                    background-color: #afe5e5;
                }

                /***** MEDIAS *****/

                @media (max-width: 1200px) {
                    .main__aside,
                    .welcome__help {
                        display: none;
                    }
                    .main__content {
                        width: 100%;
                        text-align: center;
                        padding: 20px;
                    }
                }

                @media (max-width: 600px) {
                    .welcome__main {
                        width: calc(100% - 40px);
                    }
                    .welcome h1 {
                        display: none;
                    }
                    .welcome__flag,
                    .main__other {
                        display: none;
                    }
                    .main__content {
                        padding: 10px;
                    }
                }
            `}</style>
    </div>
  </>
);
export default Welcome;
