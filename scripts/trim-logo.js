#!/usr/bin/env node

/**
 * Script para recortar el logo y eliminar espacio vacío alrededor
 * Uso: node scripts/trim-logo.js
 * 
 * Requiere: npm install sharp
 */

const sharp = require('sharp');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '../public/images/publicidadmadridlogoVerde02.png');
const OUTPUT_FILE = path.join(__dirname, '../public/images/logo-trimmed.png');

async function trimLogo() {
  try {
    console.log('🔧 Recortando logo...');
    
    const image = sharp(INPUT_FILE);
    const metadata = await image.metadata();
    
    console.log(`📐 Dimensiones originales: ${metadata.width}x${metadata.height}`);
    
    // Recortar espacio transparente/blanco alrededor
    const trimmed = await image
      .trim({
        threshold: 10,  // Umbral para detectar bordes
        background: { r: 255, g: 255, b: 255, alpha: 0 }  // Fondo transparente
      })
      .toFile(OUTPUT_FILE);
    
    console.log(`✅ Logo recortado guardado en: ${OUTPUT_FILE}`);
    console.log(`📐 Nuevas dimensiones: ${trimmed.width}x${trimmed.height}`);
    console.log('');
    console.log('📝 Para usar el logo recortado, actualiza Navbar.tsx:');
    console.log('   src="/images/logo-trimmed.png"');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('');
    console.log('💡 Asegúrate de tener sharp instalado:');
    console.log('   npm install --save-dev sharp');
  }
}

// Verificar si sharp está disponible
try {
  require.resolve('sharp');
  trimLogo();
} catch (e) {
  console.log('📦 sharp no está instalado. Instalando...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install --save-dev sharp', { stdio: 'inherit' });
    trimLogo();
  } catch (installError) {
    console.error('❌ No se pudo instalar sharp');
    process.exit(1);
  }
}
