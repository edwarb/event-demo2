import React from "react";
import styles from "../../../../styles/MainPage.module.css";

function MainPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          padding: 16,
          width: 560,
        }}
      >
        <p style={{ textAlign: "center" }}>
          <small>Join us for a marriage celebration on August 29, 2021.</small>
        </p>
        <div className={styles.flexCenter}>
          <img
            src="https://raw.githubusercontent.com/isadoracreative/wedding-email/master/images/two-heart-icon.png"
            alt="Two Hearts Icon"
            height="24"
            className=""
          />
        </div>
        <div>
          <h1 className="text-center">You're Invited!</h1>
          <div className={styles.flexCenter}>
            <img
              src="/photo.jpeg"
              alt="Photo of Edwar and Saras"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: 20,
              }}
            />
          </div>
        </div>
        <div style={{ flexDirection: "column", marginTop: 16 }}>
          <p className="dear">Dear Family and Friends,</p>
          <p>We want to announce that we,</p>
          <div style={{ color: "#ee6951" }}>
            <h2
              style={{
                textAlign: "center",
                lineHeight: 1,
              }}
            >
              Edwar Budiman
            </h2>
            <h4
              style={{
                textAlign: "center",
                lineHeight: 0,
              }}
            >
              and
            </h4>
            <h2
              style={{
                textAlign: "center",
                lineHeight: 1,
              }}
            >
              Saras Paramitha Murti
            </h2>
          </div>
          <p>will celebrate our marriage on</p>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>August 29, 2021</h2>
          </div>
          <p>
            The ceremony itself will be held privately in Jakarta, and will
            start at 8.30 AM GMT. With all due respect, we want you to celebrate
            with us in
            <a target="_blank" href="https://us02web.zoom.us/j/85480130835">
              {` Live Streaming `}
            </a>
            that we provide
          </p>
          <p>
            We are very sorry that we only provide
            <a target="_blank" href="https://us02web.zoom.us/j/85480130835">
              {` Live Streaming `}
            </a>
            for you guys
          </p>
          <p>
            We hope that in that time, we have a great time with you in our
            <a target="_blank" href="https://us02web.zoom.us/j/85480130835">
              {` Live Streaming `}
            </a>
            because we already prepare Zoom Photo session with you guys that we
            hope you can enjoy it.
          </p>
        </div>
        <div className="button expanded">
          <table className="button expanded">
            <tr>
              <td>
                <table>
                  <tr>
                    <td>
                      {/* <img src="kiwi.svg" alt="Kiwi standing on oval"></img> */}
                      <a
                        href="https://us02web.zoom.us/j/85480130835"
                        target="_blank"
                      >
                        Join Zoom
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div>
          If you dont have Zoom Account, we also provide you Youtube Live
          Streaming that you can access it below.
        </div>
        <div>
          <table
            className="button expanded radius alert"
            style={{ marginTop: 12 }}
          >
            <tr>
              <td>
                <table>
                  <tr>
                    <td>
                      <a href="https://youtu.be/HdMGbsitrFY" target="_blank">
                        Join Youtube Live
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p>
            Thank you for all of your support up until now. We hope you have a
            great day ahead
          </p>
        </div>
        <hr />
        <div>
          <p className="text-center">
            <small>
              And of His Signs is that he created for you from yourselves mates
              That you may find tranquility in them; And he placed between you
              affection and mercy. Indeed in that are signs for a people who
              give thought (Ar-Rum: 21)
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
