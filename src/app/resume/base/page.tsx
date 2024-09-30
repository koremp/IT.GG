export default function BaseResumePage() {
  return (
    <div>
      <h1>Base Resume</h1>
      {/*  */}
      resume name
      <div>
        Personal Information
        <div>
          name(first, last)
          birth
          email
          home
          phone
          image
          <div>
            Links
            <div>
              github
              blog
              linkedin
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        Experience
        <div>
          Academy Educations
          <div>
            datetime(since until)
            major
            desc
          </div>
          {/*  */}
          Careers
          <div>
            datetime(since until)
            position
            desc
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        Educations
        Languages
        Licenses/Awards/Certifications
        <div>
          datetime
          desc
        </div>
      </div>
      {/*  */}
      <div>
        Self Introduction
      </div>
      <div>
        attachment files
      </div>
    </div>
  );
}