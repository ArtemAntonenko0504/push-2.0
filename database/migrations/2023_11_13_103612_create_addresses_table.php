<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('addresses', function (Blueprint $table) {
      $table->id();
      $table->string('street');
      $table->integer('street_number');
      $table->string('district');
      $table->string('city');
      $table->string('postal_code');
      $table->string('country');
      $table->string('place_id')->nullable();
      $table->float('latitude')->nullable();
      $table->float('longitude')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('addresses');
  }
};
