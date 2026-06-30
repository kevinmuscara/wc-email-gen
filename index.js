document.getElementById('school').addEventListener("change", function(e) {
  let school = document.getElementById("school").value;
  document.querySelectorAll(`[id$='-image']`).forEach(element => element.style.display = "none");
  if(school == "District Office" || school == "West Clermont High School" || school == "West Clermont Middle School") {
    document.querySelectorAll("[id='wc-image']").forEach(element => element.style.display = "block");
  } else if (school == "Willowville Elementary School") {
    document.querySelectorAll("[id='wv-image']").forEach(element => element.style.display = "block");
  } else if (school == "Summerside Elementary School") {
    document.querySelectorAll("[id='se-image']").forEach(element => element.style.display = "block");
  } else if (school == "Clough Pike Elementary School") {
    document.querySelectorAll("[id='ce-image']").forEach(element => element.style.display = "block");
  } else if (school == "Merwin Elementary School") {
    document.querySelectorAll("[id='me-image']").forEach(element => element.style.display = "block");
  } else if (school == "Amelia Elementary School") {
    document.querySelectorAll("[id='ae-image']").forEach(element => element.style.display = "block");
  } else if (school == "Holly Hill Elementary School") {
    document.querySelectorAll("[id='hh-image']").forEach(element => element.style.display = "block");
  } else if (school = "Withamsville-Tobasco Elementary School") {
    document.querySelectorAll("[id='wt-image']").forEach(element => element.style.display = "block");
  }
});

const form_submit = (event) => {
  let full_name = document.getElementById("full_name").value;
  let email = document.getElementById("email").value;
  let job_title = document.getElementById("job_title").value;
  let phone = document.getElementById("phone").value;
  let website = document.getElementById("website").value;
  let school = document.getElementById("school").value;
  let school_image = document.querySelector(`input[name="photo"]:checked`).value;

  if(school == "District Office") {
    school = "West Clermont Local Schools";
  }

  console.log(full_name, email, job_title, school, phone, website, school_image);

  document.getElementById('info_form').outerHTML = `
      <div class="w-full max-w-3xl rounded-xl border border-black bg-white p-6 shadow-sm">
        <p class="mb-3 text-sm text-base-content/70">
          Here's your generated signature. To use it, follow these instructions:
        </p>

        <ol class="mb-3 text-sm text-base-content/70 list-decimal list-inside">
          <li>Copy the signature in the box below</li>
          <li>Log in to Gmail with your West Clermont account on a computer</li>
          <li>Click on the gear in the upper right corner, and choose "See all Settings"</li>
          <li>On the "General" tab, scroll down to the "Signature section"</li>
          <li>Paste the generated signature into the box</li>
          <li>Click "Save Changes" at the bottom of the screen</li>
        </ol>

        <div
          id="email-signature"
          contenteditable="true"
          spellcheck="false"
          style="display: inline-block; max-width: 100%; border: 1px solid #d7dee9; background: #ffffff; padding: 14px 16px; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; color: #1f2937;"
        >
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 560px; table-layout: fixed; font-family: Arial, Helvetica, sans-serif; color: #1f2937;">
            <tr>
              <td style="vertical-align: top; padding-right: 16px; width: 140px;">
                <img
                  src="${school_image}"
                  alt="West Clermont"
                  width="140"
                  style="display: block; width: 140px; max-width: 100%; height: auto; border: 0; outline: none; text-decoration: none;"
                />
              </td>

              <td style="vertical-align: top; width: auto;">
                <div style="font-size: 16px; line-height: 20px; font-weight: 700; color: #111827; margin: 0 0 4px 0;">${full_name}</div>
                <div style="font-size: 12px; line-height: 16px; font-weight: 700; color: #374151; margin: 0 0 4px 0;">${school}</div>
                <div style="font-size: 12px; line-height: 16px; font-weight: 700; color: #374151; margin: 0 0 4px 0;">${job_title}</div>

                <div style="height: 1px; background: #d1d5db; margin: 0 0 10px 0;"></div>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: Arial, Helvetica, sans-serif;">
                  <tr>
                    <td style="font-size: 12px; line-height: 16px; color: #0f172a; padding: 0 0 4px 0;">
                      <a href="mailto:${email}" style="color: #0f172a; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 12px; line-height: 16px; color: #0f172a; padding: 0 0 4px 0;">
                      <a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 12px; line-height: 16px; color: #0f172a;">
                      <a href="${website}" style="color: #0f172a; text-decoration: none;">${website}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
  `;
}