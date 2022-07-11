export default function SignUp() {
  return (
    <div id="signup">
      <div id="mc_embed_signup">
        <form
          action="https://hovawedding.us7.list-manage.com/subscribe/post?u=fb29e5e7300f5947c068a436e&amp;id=c65220aa7b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="signupFormFlex">
            <div className="signUpCopy">
              <h2>Oh Hey! Mailing List</h2>
              <p>
                There is much more to discuss! Sign up to get notifications
                about blog posts that cover more design system related things.
              </p>
            </div>
            <div className="emailFormArea">
              <label htmlFor="mce-EMAIL">Email Address</label>
              <input
                onChange={() => {}}
                type="email"
                placeholder="email@email.com"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                onChange={() => {}}
                type="text"
                name="b_fb29e5e7300f5947c068a436e_c65220aa7b"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  onChange={() => {}}
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
