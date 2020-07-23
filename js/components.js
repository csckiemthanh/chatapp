const components = {};
components.welcomeScreen = `
<h1>welcome to Chat app </h1>
`;
components.registerScreen=`
<div class = "register-container">
        <div class="aside-right">
            <div class="header">
                <h3>MindX chat</h3>
            </div>
    
                <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                    <input type="text" name = "firstName" placeholder="First name...">
                    <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                    <input type="text" name = "lastName" placeholder="Last name...">
                    <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text"
                    placeholder="Email..."
                    name="email">
                    <div class = "error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password"
                    placeholder="Password.."
                    name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password"
                    placeholder="Comfirm Password.."
                    name="comfirmPassword">
                    <div class="error" id="comfirm password-error"></div>
                </div>
                <div class="form-action">
                    <span id="redirect-to-login">
                        Already have an account? Login
                    </span>
                    <button class= "btn" type="submit">
                        Register
                    </button>
                </div>
                </form>  
        </div>
    </div>
    `
    components.loginScreen=`
    <div class = "login-container">
        <div class="aside-right">
            <div class="header">
                <h3>MindX chat</h3>
            </div>
    
                <form id="login-form">
                
                <div class="input-wrapper">
                    <input type="text"
                    placeholder="Email..."
                    name="email">
                    <div class = "error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password"
                    placeholder="Password.."
                    name="password">
                    <div class="error" id="password-error"></div>
                </div>
               
                <div class="form-action">
                    <span id="redirect-to-register">
                        Don't have an account? Register
                    </span>
                    <button class= "btn" type="submit">
                        login
                    </button>
                </div>
                </form>  
        </div>
    </div>`