document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi đi mặc định

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Kiểm tra email có đúng định dạng không
    if (!email.endsWith("@gmail.com")) {
      emailError.classList.remove("d-none");
      isValid = false;
    } else {
      emailError.classList.add("d-none");
    }

    // Kiểm tra mật khẩu có ít nhất 6 ký tự không
    if (password.length < 6) {
      passwordError.classList.remove("d-none");
      isValid = false;
    } else {
      passwordError.classList.add("d-none");
    }

    // Nếu cả hai hợp lệ, chuyển hướng sang index.html
    if (isValid) {
      window.location.href = "../index.html";
    }
  });
