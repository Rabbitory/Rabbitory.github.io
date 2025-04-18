// import DocsLink from "./DocsLink";

export default function CliPreview() {
  return (
    <div className="-z-20 flex md:flex-row flex-col dark:border-white justify-center items-center gap-16 py-20 px-10">
      <div className="bg-[#1d1d2d] p-2 rounded-md border border-accent drop-shadow-xl">
        <video loop autoPlay playsInline muted width="900">
          <source
          // src={require("/static/img/loaf-cli-trimmed.mp4").default}
          ></source>
        </video>
      </div>
      <div>
        <div>
          <h3>With just a few clicks of the CLI, deploy:</h3>
          <ul>
            <li>AWS IAM Roles & Instance Profiles</li>
            <li>AWS Control Panel EC2 Instance</li>
            <li>AWS Control Panel Security Group</li>
            <li>AWS DynamoDB Metadata Store </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
