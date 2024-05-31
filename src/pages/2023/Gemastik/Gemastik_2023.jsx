import MainLayout from "../../../layouts/MainLayout";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    title: "Competitive Programming",
    path: "/gemastik/2023/competitive-programming",

    /*
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[A] Es Kopi Boba.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[B] Flappy Angry Birds.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[C] MinES.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[D] Kolam Ikan.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[E] Ringkasan Bilangan.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[F] Produk Wirausaha Provinsi.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[G] Array Keren.pdf
/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[H] Menghitung Lembah.pdf
    */
    rounds: [
      {
        name: "Penyisihan",
        contents: [
          {
            type: "Questions",
            contents: [
              {
                title: "A",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[A] Es Kopi Boba.pdf",
              },
              {
                title: "B",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[B] Flappy Angry Birds.pdf",
              },
              {
                title: "C",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[C] MinES.pdf",
              },
              {
                title: "D",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[D] Kolam Ikan.pdf",
              },
              {
                title: "E",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[E] Ringkasan Bilangan.pdf",
              },
              {
                title: "F",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[F] Produk Wirausaha Provinsi.pdf",
              },
              {
                title: "G",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[G] Array Keren.pdf",
              },
              {
                title: "H",
                path: "/data/GEMASTIK_2023/CP/PENYISIHAN/PROBLEM/[H] Menghitung Lembah.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Final",
        contents: [
          {
            type: "Questions",
            contents: [
              {
                title: "A-J",
                path: "/data/GEMASTIK_2023/CP/FINAL/PROBLEM/Soal Final Gemastik 2023 A-J.pdf",
              },
              {
                title: "K-L",
                path: "/data/GEMASTIK_2023/CP/FINAL/PROBLEM/Soal Final Gemastik 2023 K-L.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "UI/UX",
    path: "/gemastik/2023/ui-ux",
    contents: [
      {
        title: "TeamSEA EcoSEA",
        path: "/data/GEMASTIK_2023/UI-UX/Proposal-TeamSEA-EcoSEA.pdf",
      },
    ],
  },
  {
    id: 3,
    title: "Game Development",
    path: "/gemastik/2023/game-development",
    contents: [
      {
        title: "Geometrisatu",
        path: "/data/GEMASTIK_2023/GameDev/Pengembangan Aplikasi Permainan (Game Development) - Universitas Sumatera Utara - Geometrisatu - GEMASTIK23-23578370 - 6169.pdf",
      },
    ],
  },
];

const Gemastik_2023 = () => {
  // Kategori
  const [category, setCategory] = useState();

  //   PDF file
  const [showData, setShowData] = useState();

  //   Final & Penyisihan
  const [showRound, setShowRound] = useState();

  // Questions & Solutions
  const [showType, setShowType] = useState();

  const selectedCategory = categories.find((item) => item.title === category);

  const selectedRound =
    selectedCategory && selectedCategory.rounds
      ? selectedCategory.rounds.find((round) => round.name === showRound)
      : null;

  const selectedType =
    selectedRound && selectedRound.contents
      ? selectedRound.contents.find((content) => content.type === showType)
      : null;

  useEffect(() => {
    setShowData(undefined);
    setShowType(undefined);
  }, [category, showRound]);

  return (
    <MainLayout title="Gemastik 2023">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {categories &&
            categories.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() =>
                    category == item.title
                      ? setCategory(undefined)
                      : setCategory(item.title)
                  }
                  className={`text-purple border-2 border-purple rounded-md bg-lightPurple px-6 py-2 font-bold hover:brightness-95 transition-all ${
                    category == item.title
                      ? "bg-purple text-white"
                      : "text-purple border-2 border-purple rounded-md bg-lightPurple"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
        </div>

        {category == "Competitive Programming" ? (
          <>
            <div className="flex gap-2">
              {categories[0].rounds &&
                categories[0].rounds.map((round, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      showRound == round.name
                        ? setShowRound(undefined)
                        : setShowRound(round.name)
                    }
                    className={`text-purple border-2 border-purple rounded-md bg-lightPurple px-6 py-2 font-bold hover:brightness-95 transition-all ${
                      showRound == round.name
                        ? "bg-purple text-white"
                        : "text-purple border-2 border-purple rounded-md bg-lightPurple"
                    }`}
                  >
                    {round.name}
                  </button>
                ))}
            </div>
            <div className="flex gap-2">
              {selectedRound &&
                selectedRound.contents.map((content, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      showType === content.type
                        ? setShowType(undefined)
                        : setShowType(content.type)
                    }
                    className={`text-purple border-2 border-purple rounded-md bg-lightPurple px-6 py-2 font-bold hover:brightness-95 transition-all ${
                      showType === content.type
                        ? "bg-purple text-white"
                        : "text-purple border-2 border-purple rounded-md bg-lightPurple"
                    }`}
                  >
                    {content.type}
                  </button>
                ))}
            </div>
            <div className="flex gap-2">
              {selectedType &&
                selectedType.contents.map((content, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      showData === content.path
                        ? setShowData(undefined)
                        : setShowData(content.path)
                    }
                    className={`text-purple border-2 border-purple rounded-md bg-lightPurple px-6 py-2 font-bold hover:brightness-95 transition-all ${
                      showData === content.path
                        ? "bg-purple text-white"
                        : "text-purple border-2 border-purple rounded-md bg-lightPurple"
                    }`}
                  >
                    {content.title}
                  </button>
                ))}
            </div>
          </>
        ) : (
          // UI/UX and Game Development
          <div className="flex gap-2">
            {selectedCategory &&
              selectedCategory.contents.map((content, i) => (
                <button
                  key={i}
                  onClick={() =>
                    showData == content.path
                      ? setShowData(undefined)
                      : setShowData(content.path)
                  }
                  className={`text-purple border-2 border-purple rounded-md bg-lightPurple px-6 py-2 font-bold hover:brightness-95 transition-all ${
                    showData == content.path
                      ? "bg-purple text-white"
                      : "text-purple border-2 border-purple rounded-md bg-lightPurple"
                  }`}
                >
                  {content.title}
                </button>
              ))}
          </div>
        )}

        <div className="flex justify-center">
          {showData ? (
            <object
              data={showData}
              width="900"
              className="h-[100vh] w-full"
            ></object>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
};

export default Gemastik_2023;
