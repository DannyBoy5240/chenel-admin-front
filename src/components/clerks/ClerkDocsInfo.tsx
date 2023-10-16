import React, { useState, useEffect } from "react";
import axios from "axios";

import { BACKEND_URL } from "../../constants";

import houseSolidIcon from "../../assets/icons/house-solid.svg";
import toWritersIcon from "../../assets/icons/to-writers.svg";
import toClerksIcon from "../../assets/icons/to-clerks.svg";
import backIcon from "../../assets/icons/back.svg";
import removeIcon from "../../assets/icons/delete.svg";
import addPlusIcon from "../../assets/icons/add-new-user.svg";

export default function ClerkDocsInfo(props: any) {
  const MAX_VALUE = 10005;
  const [key, setKey] = useState("home");
  // const [selectedName, setSelectedName] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const [userViewFlag, setUserViewFlag] = useState(0); // flag idx for user item click

  const defaultQuestions = [
    "What is your name? Can you spell it? Do you have a document that shows your name such as a passport or work permit or driver's license?",
    "What is your date of birth? See if it corresponds to whatever document that the client has provided.",
    "Where were you born? What city were you born in? What department is that? Are your parents from that same city? Where else in Haiti do you have family members (close or extended; this question is important because later, the client might flee there to save her life)?",
    "How big was your family? How many brothers? How many sisters? Were your parents married? Did either have other romantic or extramarital relations?",
    "Have you spent your whole life where you were born? Have you moved to other places? Reasons for moving?",
    "What is your religion? Are you associated with a political party? Are you a member of an organization or club or group or movement, etc.? Your position in such an organization? Your responsibilities? Were you ever persecuted as a result? If yes, what happened? What is the whole story? Ask ensuing questions to frame the story. Identify the group who persecuted our client, more importantly, the main person (character).",
    "Have you ever been persecuted for any other reason? Has someone ever slapped you? Punched you? Give her a minute to think. Has someone ever told lies about you, to defame you? Have you ever fought someone? Have you ever been the victim of a rape (a friend maybe)? Have you ever had an accident? Do you hate anyone (psychological ploy to get the person to open up, to answer your questions)? Have you ever been shot at? Have you seen a dead body on the street? What happened? Who died? Why? Where? How? Do you have anything to share that might be relevant to your asylum, though it may not be related? What is it that you were thinking of but thought wasn't important to share with us? What is it that you thought of but didn't want to share with us? Is there something that you're afraid of sharing with us? Have you moved to another part of the country to flee persecution? Where? Remember the WHO (the persecutor) must prevalent.",
    "Has he or she gone to see the authorities? What happened? Remember the US Government gives asylum to those who were persecuted by the government or by forces where the government was unable or unwilling to protect them. Therefore, we must question them about the effort that they made in seeking governmental protection, and we must clearly show that in those stories. If the client was in a foreign country, where he or she was persecuted because of her race or nationality, we must show the disregard of the government or the authorities of that third country to protect her.",
    "Are your parents still living? If someone died, get the whole story of his or her death, regardless of the date. Were they involved in politics, religion, or some social groups? What were their roles? How did their organizational involvement affect their lives and or our client? Ask a series of questions about them as if they were our client, as if the story that we’re writing is about them, that is if our client doesn’t have a viable story for the asylum.",
    "Use the same line of parents questioning for the siblings. Did they live in the same house, city, etc.? Was there strife between them? Why? What happened? Has our client lost a sibling, meaning through death? What happened?",
    "Question the clients also about extended family members, aunts, uncles, cousins, grandparents, etc. Does he or she know about any harm that came to any of them? What happened? What can our client share with us? (How can you include that information in the asylum?)",
    "We've had cases where it is extremely difficult to find information to construct a good story for the client. In similar cases, we need to direct our questioning toward friends, work colleagues, notable individuals in the community (besides close family ties), etc. Has any of your friends suffered harms, political, religious, or social (based on ethnic association, background, or organizational association)? How did that affect you or the community?",
    "When did you leave Haiti? How did you leave? Where did you go? How was your re-establishment in the foreign country? Did you have friends or family members there? Did you experience racism? How about discrimination? Were you or any of your family members or friends mistreated because they were Haitians? Have you heard tales of racism and discrimination against Haitians? What happened? How do the authorities in that or those countries generally treat Haitians? Draw the stories from the clients so that the story that is told is their story.",
    "When did you decide to leave the host country? What date? What route did you take?",
    "Have you already been to the US? Were you ever deported from any country? Why did you choose the US?",
    "Notes : ( Remember the story must be the client. She must remember the names, the dates, the places, etc. She must have directly or indirectly experienced the feats or heard about them or can readily relate to them. As a writer, you’re rendering her tales fluid to be more presentable to a judge. You’re doing coordination. )",
  ];

  const [flagWriterUser, setFlagWriterUser] = useState(
    new Array(MAX_VALUE).fill(0)
  );
  const [flagWriterIdx, setFlagWriterIdx] = useState(0);

  const [userList, setUserList] = useState([]);
  const [docList, setDocList] = useState([]);
  const [info, setInfo] = useState(new Array(16).fill(""));

  const fetchData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res1 = await axios.post(
        `${BACKEND_URL}/users/userList`,
        {},
        config
      );
      if (res1.data.success) setUserList(res1.data.users);
      else setUserList([]);

      const res2 = await axios.post(
        `${BACKEND_URL}/users/viewalldocs`,
        {},
        config
      );
      if (res2.data.success) setDocList(res2.data.docs);
      else setDocList([]);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userDocViewHandler = (key: any, email: string) => {
    setUserViewFlag(key);
    setSelectedUser({
      email: email,
      fullName: (userList.filter((user: any) => user.email === email)[0] as any)
        ?.fullName,
    });
    // set information doc of selected email
    const tempWriterDoc = (
      docList.filter((doc: any) => doc.email === email)[0] as any
    ).writerdoc;
    setInfo(tempWriterDoc);
  };

  const removeUserHandler = () => {
    console.log(`user ${userViewFlag} will be deleted!`);
  };

  const setWriterUserManageHandler = () => {
    console.log("Set users to writer!");

    if (flagWriterIdx == 0) return;

    // Clear FlagWriterUser
    setFlagWriterUser(new Array(MAX_VALUE).fill(0));
    setFlagWriterIdx(0);
  };

  const handleWriterData = async (isSubmit: boolean) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      email: (selectedUser as any).email,
      writerdoc: defaultQuestions.map((doc, idx) => {
        return { qus: doc, ans: info[idx].ans };
      }),
      status: isSubmit ? "WRITERCONFIRM" : "WRITERCHECKING",
    };

    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/updatewriterdoc`,
        data,
        config
      );
      if (res.data.success) {
        console.log("update writer doc succeed!");
      }
    } catch (err: any) {
      console.log(err.message);
    }
    setUserViewFlag(0);
  };

  const saveDataHandler = () => {
    handleWriterData(false);
  };

  const submitDataHandler = () => {
    handleWriterData(true);
  };

  function convertToUSDateTime(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/New_York",
    };
    return date.toLocaleString("en-US", options);
  }

  return (
    <div className="bg-white h-100 default-border-raidus">
      {/* Summary View */}
      {userViewFlag == 0 ? (
        <div className="d-flex flex-column h-100">
          <div
            key={key}
            role="button"
            style={{
              background: "#c2e7ff",
              borderTopLeftRadius: "18px",
              borderTopRightRadius: "18px",
            }}
            className="py-2"
          >
            <div className="d-inline-flex w-100 px-3 py-2">
              <div style={{ width: "5%" }}>No</div>
              <div style={{ width: "20%" }}>Name</div>
              <div style={{ width: "20%" }}>Email</div>
              <div style={{ width: "20%" }}>Phone</div>
              <div style={{ width: "20%", textAlign: "end" }}>
                Registered Time
              </div>
              <div style={{ width: "15%", textAlign: "end" }}>Status</div>
            </div>
          </div>
          <div style={{ overflowY: "auto", height: "80vh" }}>
            {docList
              .filter((doc: any) =>
                doc.clerk === props.curClerk ? props.curClerk : ""
              )
              .filter(
                (doc: any) =>
                  JSON.stringify(doc).includes(props.searchKey) ||
                  JSON.stringify(
                    userList.filter((user: any) => user.email === doc.email)[0]
                      ? userList.filter(
                          (user: any) => user.email === doc.email
                        )[0]
                      : ""
                  ).includes(props.searchKey)
              )
              .map((doc: any, key2: any) => {
                return (
                  <div key={key2} role="button" className="hover-row-bg-change">
                    <div
                      className="d-inline-flex w-100 px-3 py-2 align-items-center"
                      onClick={() => userDocViewHandler(key2 + 1, doc.email)}
                    >
                      <div style={{ width: "5%" }}>{key2 + 1}</div>
                      <div style={{ width: "20%" }}>
                        {
                          (
                            userList.filter(
                              (user: any) => user.email === doc.email
                            )[0] as any
                          )?.fullName
                        }
                      </div>
                      <div style={{ width: "20%" }}>{doc.email}</div>
                      <div style={{ width: "20%" }}>
                        {
                          (
                            userList.filter(
                              (user: any) => user.email === doc.email
                            )[0] as any
                          )?.phoneNumber
                        }
                      </div>
                      <div style={{ width: "20%", textAlign: "end" }}>
                        {convertToUSDateTime(doc.createdAt)}
                      </div>
                      <div style={{ width: "15%", textAlign: "end" }}>
                        <div
                          className="d-inline-flex row-send-btn"
                          style={{ zIndex: 50 }}
                          onClick={() => console.log("view button clicked!")}
                        >
                          {doc.status.toLowerCase() === "writerchecking"
                            ? "Pending"
                            : "Completed"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : key === "home" ? (
        <div>
          <div className="position-relative d-flex">
            <div className="d-flex px-4 pt-4">
              <div>
                <span className="px-2">Full Name : </span>
                <input
                  type="text"
                  className="user-input-title-box"
                  value={(selectedUser as any).fullName}
                  disabled
                />
              </div>
              <div className="ps-4">
                <span className="px-2">Email : </span>
                <input
                  type="email"
                  className="user-input-title-box"
                  value={(selectedUser as any).email}
                  disabled
                />
              </div>
            </div>
            {(
              docList.filter(
                (doc: any) => doc.email === (selectedUser as any).email
              )[0] as any
            )?.status.toLowerCase() === "writerchecking" && (
              <div
                className="position-absolute"
                style={{ top: "12px", right: "24px" }}
              >
                <div
                  className="px-0 py-2 d-inline-flex mx-2"
                  style={{ background: "#c2e7ff", borderRadius: "12px" }}
                  onClick={() => saveDataHandler()}
                  role="button"
                >
                  <span className="px-3">
                    <img src={addPlusIcon} className="icon-default-sz" />
                  </span>
                  <span className="pe-3">Save</span>
                </div>
                <div
                  className="px-0 py-2 d-inline-flex"
                  style={{ background: "#c2e7ff", borderRadius: "12px" }}
                  onClick={() => submitDataHandler()}
                  role="button"
                >
                  <span className="px-3">
                    <img src={addPlusIcon} className="icon-default-sz" />
                  </span>
                  <span className="pe-3">Submit</span>
                </div>
              </div>
            )}
          </div>
          <div className="d-flex">
            <div
              className="px-4 w-50"
              style={{
                paddingTop: "32px",
                height: "calc(100vh - 160px)",
                overflow: "auto",
              }}
            >
              {(
                docList.filter(
                  (doc: any) => doc.email === (selectedUser as any).email
                )[0] as any
              )?.qusans.map((data: any, key: any) => {
                return (
                  <div key={`qusans${key + 1}`}>
                    <div>
                      {key + 1}. {data.qus}
                    </div>
                    <div>
                      <textarea
                        className="user-input-box"
                        value={data.ans}
                        disabled
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="px-4 w-50"
              style={{
                paddingTop: "32px",
                height: "calc(100vh - 160px)",
                overflow: "auto",
              }}
            >
              {defaultQuestions.map((qus: any, key: any) => {
                return (
                  <div key={`qus${key + 1}`}>
                    <div>
                      {key + 1}. {qus}
                    </div>
                    <div>
                      <textarea
                        className="user-input-box"
                        value={info[key].ans}
                        onChange={(e) => {
                          const updatedInfo = [...info];
                          updatedInfo[key].ans = e.target.value;
                          setInfo(updatedInfo);
                        }}
                        disabled={
                          (
                            docList.filter(
                              (doc: any) =>
                                doc.email === (selectedUser as any).email
                            )[0] as any
                          )?.status.toLowerCase() === "writerconfirm"
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
