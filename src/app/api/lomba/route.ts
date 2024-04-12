import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request){
  try {
    const {nama, nisn, kelas, jenisLomba, ttl, judulKarya, namaTim, anggota} = await req.json();
    const cek = await prisma.lomba.findFirst({
      where:{
        nama,
        nisn
      }
    })
    if(cek) return NextResponse.json({message: 'Anda sudah terdaftar'})
    const dataLomba = await prisma.lomba.create({
      data:{
        nama,
        nisn,
        kelas,
        jenisLomba,
        ttl,
        judulKarya,
        namaTim,
        anggota
      }
    })
    if(!dataLomba) {
      return NextResponse.json({message: 'Something went wrong'})
    }
    return NextResponse.json(dataLomba)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function GET (){
  try {
    const dataFutsal = await prisma.lomba.findMany({
      where:{
        jenisLomba: 'Futsal'
      }
    });

    const dataVocal = await prisma.lomba.findMany({
      where:{
        jenisLomba: 'Vocal Solo'
      }
    });

    const dataPuisi = await prisma.lomba.findMany({
      where:{
        jenisLomba: 'Cipta Puisi'
      }
    });

    const responseData ={
      futsal: dataFutsal,
      vocal: dataVocal,
      puisi: dataPuisi
    }
    return NextResponse.json(responseData)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}