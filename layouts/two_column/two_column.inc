<?php

// Plugin definition
$plugin = array(
  'title' => t('Two column bootstrap layout'),
  'category' => t('Bootstrap'),
  'icon' => 'two_column.png',
  'theme' => 'panels_two_column',
  'css' => 'two_column.css',
  'regions' => array(
    'left' => t('Left'),
    'right' => t('Right'),
  ),
);
