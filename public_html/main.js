// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();
//     let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");

//     let isValid = true;
//     if (!email.endsWith("@gmail.com")) {
//       emailError.classList.remove("d-none");
//       isValid = false;
//     } else {
//       emailError.classList.add("d-none");
//     }
//     if (password.length < 6) {
//       passwordError.classList.remove("d-none");
//       isValid = false;
//     } else {
//       passwordError.classList.add("d-none");
//     }
//     if (isValid) {
//       window.location.href = "../index.html";
//     }
//   });

document.addEventListener("DOMContentLoaded", function () {
  // Đăng ký
  let registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.getElementById("username").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("inputPassword3").value.trim();
      let confirmPassword = document
        .getElementById("confirmPassword")
        .value.trim();

      let usernameError = document.getElementById("usernameError");
      let emailError = document.getElementById("emailError");
      let passwordError = document.getElementById("passwordError");
      let confirmPasswordError = document.getElementById(
        "confirmPasswordError"
      );

      let isValid = true;

      // Kiểm tra tên đăng nhập
      if (username === "") {
        usernameError.classList.remove("d-none");
        isValid = false;
      } else {
        usernameError.classList.add("d-none");
      }

      // Kiểm tra email hợp lệ
      if (!email.endsWith("@gmail.com")) {
        emailError.classList.remove("d-none");
        isValid = false;
      } else {
        emailError.classList.add("d-none");
      }

      // Kiểm tra mật khẩu có ít nhất 6 ký tự
      if (password.length < 6) {
        passwordError.classList.remove("d-none");
        isValid = false;
      } else {
        passwordError.classList.add("d-none");
      }

      // Kiểm tra nhập lại mật khẩu
      if (confirmPassword !== password) {
        confirmPasswordError.classList.remove("d-none");
        isValid = false;
      } else {
        confirmPasswordError.classList.add("d-none");
      }

      // Nếu hợp lệ, chuyển hướng đến trang đăng nhập
      if (isValid) {
        alert("Đăng ký thành công! Đang chuyển hướng đến trang đăng nhập...");
        window.location.href = "dangnhap.html";
      }
    });
  }

  // Đăng nhập
  let loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();

      let emailError = document.getElementById("emailError");
      let passwordError = document.getElementById("passwordError");

      let isValid = true;

      // Kiểm tra email hợp lệ
      if (!email.endsWith("@gmail.com")) {
        emailError.classList.remove("d-none");
        isValid = false;
      } else {
        emailError.classList.add("d-none");
      }

      // Kiểm tra mật khẩu có ít nhất 6 ký tự
      if (password.length < 6) {
        passwordError.classList.remove("d-none");
        isValid = false;
      } else {
        passwordError.classList.add("d-none");
      }

      // Nếu hợp lệ, chuyển hướng đến trang chủ
      if (isValid) {
        alert("Đăng nhập thành công! Đang chuyển hướng...");
        window.location.href = "../index.html";
      }
    });
  }
});
